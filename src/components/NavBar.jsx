import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, } from "@nextui-org/modal";
import { useState } from "react";


const NavBar = () => {

  const[isOpen,onOpenChange] =useState(false)
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
              <Button color="primary" variant="shadow" onClick={()=>onOpenChange(true)}>Add Blog</Button>
              <img className='border rounded-full border-white w-12 h-12' src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp'></img>
          </div>
   
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Blog</ModalHeader>
              <ModalBody>
               <form> <Input label="Title" bordered></Input>
                <Input label="Description" bordered></Input>
                <Input label="Author" bordered></Input></form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
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