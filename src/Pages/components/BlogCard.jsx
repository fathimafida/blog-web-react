import { Button } from '@nextui-org/button'
import propTypes from 'prop-types'
import { MdDelete, MdEditSquare } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteBlog, editBlog, getBlogList } from '../../redux/slices/blogSlices'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Input } from '@nextui-org/input'
import { useState } from 'react'
import { toast } from 'sonner'


const BlogCard = (
  {blog}
) => {
  const dispatch =useDispatch()
  const[isOpen,onOpenChange] =useState(false)
  return (
    
     <div className='flex  flex-col p-3  border rounded-2xl m-6 shadow-xl  transition-all ease duration-1000   hover:scale-125 hover:rotate-3 bg-gradient-to-tr from-blue-100 to-blue-400   '>
    
  <div className='flex justify-between items-center'>  
    <h2 className=' text-3xl font-bold font-serif'>{blog.title}</h2>
    <div className='flex gap-2'> 
      <Button className='hover:scale-125  text-2xl' onClick={()=>{
        onOpenChange(true)

      }}
      ><MdEditSquare/></Button>
    <Button className='hover:scale-125  text-2xl '  onClick={async()=>{
      await  dispatch(deleteBlog(blog.id))
      await  dispatch(getBlogList())
      
      }}><MdDelete/></Button>
  </div>
   <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-sans font-bold">Update Blog</ModalHeader>
              <ModalBody>
               <form  id="edit-blog"  className="flex flex-col gap-2" onSubmit={
               async (e)=>{
                  e.preventDefault()
                  const title = e.target.title.value
                  const description = e.target.description.value
                  const author = e.target.author.value

                  onOpenChange(false)
                  try {
                    
     await dispatch(editBlog(
      {
        id:blog.id,
        title:title,
        description:description,
        author:author
      }
      )).unWrap()
      await dispatch(getBlogList())
      toast.success("Blog updated successfully")
                  } catch (error) {
                    toast.error("Failed to update blog")
                  }
                 
                }}>
                <Input label="Title" bordered name="title" defaultValue={blog.title}></Input>
                <Input label="Description" bordered name="description" defaultValue={blog.description}></Input>
                <Input label="Author" bordered name="author" defaultValue={blog.author}></Input></form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit" form="edit-blog">
                  UpdateBlog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    


  </div>
  <br/>
      <p className='text-lg font-serif'>{blog.description}</p>
      <br/>
      <p className='text-xl font-serif  font-semibold '>Author:{blog.author}</p>

    </div>
      
  )
}
BlogCard.propTypes = {
  blog:{
    title:propTypes.string,
    description:propTypes.string,
    author:propTypes.string,
    id:propTypes.number
  }
}
export default BlogCard
