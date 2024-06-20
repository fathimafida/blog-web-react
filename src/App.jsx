import React from 'react'
import BlogCard from './components/BlogCard'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <NavBar/>
    
     <div className='flex flex-wrap justify-center gap-4 '>
      
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
    </>
   
  )
}

export default App