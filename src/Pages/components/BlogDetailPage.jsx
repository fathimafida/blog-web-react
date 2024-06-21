import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "../../redux/slices/blogSlices";



const BlogDetailPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const selectedBlog = useSelector((state) => state.blog.selectedBlog)
    
    useEffect(() => {
        dispatch(getBlogDetails(id))
    }, [])

    if (!selectedBlog) {
        return (
          <h1 className="w-50 h-50 text-xl text-white  font-bold justify-center flex">
            Loading...
          </h1>
        );
    }
  return (
    <div className="flex flex-col">
      <p className=" flex justify-center text-white text-3xl font-bold font-serif mb-2 ">
        {selectedBlog.title}
      </p>
      <p className="text-3xl text-white font-bold font-serif mb-2">
       {selectedBlog.description}
      </p>
    </div>
  );
}

export default BlogDetailPage