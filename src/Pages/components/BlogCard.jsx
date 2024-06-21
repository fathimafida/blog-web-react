import propTypes from 'prop-types'


const BlogCard = (
  {blog}
) => {
  return (
    
     <div className='flex flex-col p-3  border rounded-2xl m-10 shadow-xl  transition-all ease duration-1000  h-60 w-60 overflow-y-clip hover:scale-125 hover:rotate-3 bg-gradient-to-tr from-blue-300 to-pink-400  '>
    <h2 className='text-2xl font-bold font-serif'>{blog.title}</h2>
      <p className='text-lg font-serif'>{blog.description}</p>
      <p className='text-lg font-serif  font-semibold '>Author:{blog.author}</p>

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
