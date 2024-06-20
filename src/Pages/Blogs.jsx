import  { useEffect } from 'react'
import BlogCard from './components/BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogList } from '../redux/slices/blogSlices'

const Blogs = () => {
  const dispatch =useDispatch()
  const blogState = useSelector((state)=>state.blog)
  
  useEffect(()=>{
    dispatch(getBlogList())
  },[])

  if(blogState.isLoading){
    return <h1 className='w-50 h-50 text-xl  font-bold justify-center flex'>Loading...</h1>
  }
  if(blogState.isError){
    return <h1 className=' flex justify-center font-extrabold  text-2xl'>Something Went Wrong...{blogState.errorMessage}</h1>
  }
  return (
    <div className='flex flex-wrap justify-center gap-4'>
     {blogState.blogLists.map((blog)=>{
      return <BlogCard 
       key={blog.id} blog={blog}/>
      
     })}
       
      

    </div>
  )
}

export default Blogs