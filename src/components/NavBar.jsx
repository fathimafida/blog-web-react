import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, } from "@nextui-org/modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog, getBlogList } from "../redux/slices/blogSlices";
import { toast } from "sonner";


const NavBar = () => {

  const[isOpen,onOpenChange] =useState(false)
  const dispatch =useDispatch()
  return (
    
       
    <div className='flex justify-between items-center bg-gradient-to-br from- to-slate-900 p-3 gap-4 ' >
          <div className='flex items-center '>
              <h1 className='text-white  text-2xl font-bold'>Blogs </h1>
          </div>
          <div className='flex gap-5 justify-center items-center '>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>About</h1>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>Home</h1>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>Services</h1>
          </div>
          <div className='flex items-center justify-end gap-6'>
              <Button className="text-xl font-bold" color="primary" variant="shadow" onClick={()=>onOpenChange(true)}>Add Blog</Button>
              <img className='border rounded-full border-white w-12 h-12' src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp'></img>
          </div>
   
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-sans font-bold">Add Blog</ModalHeader>
              <ModalBody>
               <form  id="add-blog"  className="flex flex-col gap-2" onSubmit={
               async (e)=>{
                  e.preventDefault()
                  const title = e.target.title.value
                  const description = e.target.description.value
                  const author = e.target.author.value
                  onOpenChange(false)
              try {
                await  dispatch(createBlog({title
                  :title,description:description,author:author})).unwrap()
                await  dispatch(getBlogList())
                toast.success("Blog added successfully")
              } catch (error) {
                toast.error("Failed to add blog")
              }

                }}>
                <Input label="Title" bordered name="title"></Input>
                <Input label="Description" bordered name="description"></Input>
                <Input label="Author" bordered name="author"></Input></form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit" form="add-blog">
                  Add Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    


    </div>
    
   


    
  )
}

export default NavBar