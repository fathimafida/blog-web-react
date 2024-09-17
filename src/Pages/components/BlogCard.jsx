import { Button } from "@nextui-org/button";
import propTypes from "prop-types";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteBlog,
  editBlog,
  getBlogList,
} from "../../redux/slices/blogSlices";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const [isEditOpen, onEditOpenChange] = useState(false);
  const [isDeleteOpen, onDeleteOpenChange] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className="flex  flex-col p-3  border rounded-2xl m-6 shadow-xl  transition-all ease duration-1000   hover:scale-125 hover:rotate-2 bg-gradient-to-tr from-blue-100 to-blue-400   "
      onClick={
      () => {
        navigate(`/blog/${blog.id}`)
      }
    }>
      <div className="flex justify-between items-center">
        <h2 className=" text-3xl font-bold font-serif mb-2">{blog.title}</h2>
      </div>

      <p className="text-lg font-serif">{blog.description}</p>

      <p className="text-xl font-serif  font-semibold ">Author:{blog.author}</p>

      <div className="flex  justify-end  gap-2  mt-3">
        <Button
          className="hover:scale-100  text-2xl "
          onClick={() => {
        
            onEditOpenChange(true);
          }}
        >
          <MdEditSquare />
        </Button>

        <Button
          className="hover:scale-100  text-2xl bg-red-400 "
          onClick={async () => {
          
            onDeleteOpenChange(true);
          }}
        >
          <MdDelete />
        </Button>
      </div>

      <Modal backdrop="blur" isOpen={isEditOpen} onOpenChange={onEditOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-sans font-bold">
                Update Blog
              </ModalHeader>
              <ModalBody>
                <form
                  id="edit-blog"
                  className="flex flex-col gap-2"
                  onSubmit={async (e) => {
                    e.preventDefault();
  
                    const title = e.target.title.value;
                    const description = e.target.description.value;
                    const author = e.target.author.value;

                    onEditOpenChange(false);
                    try {
                      await dispatch(
                        editBlog({
                          id: blog.id,
                          title: title,
                          description: description,
                          author: author,
                        })
                      ).unwrap();
                      await dispatch(getBlogList());
                      toast.success("Blog updated successfully");
                    } catch (error) {
                      toast.error("Failed to update blog");
                    }
                  }}
                >
                  <Input
                    label="Title"
                    bordered
                    name="title"
                    defaultValue={blog.title}
                  ></Input>
                  <Input
                    label="Description"
                    bordered
                    name="description"
                    defaultValue={blog.description}
                  ></Input>
                  <Input
                    label="Author"
                    bordered
                    name="author"
                    defaultValue={blog.author}
                  ></Input>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit" form="edit-blog">
                  Update Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>


      </Modal>
      <Modal backdrop="blur" isOpen={isDeleteOpen} onOpenChange={onDeleteOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-sans font-bold">
                Delete Blog
              </ModalHeader>
              <ModalBody>
                <p className="text-lg font-serif" id="delete-blog ">
                  Are you sure you want to delete this blog
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  form="delete-blog"
                  onClick={async () => {
                    onDeleteOpenChange(false);

                    try {
                      await dispatch(deleteBlog(blog.id)).unwrap();
                      await dispatch(getBlogList());

                      toast.success("Blog deleted successfully");
                    } catch (error) {
                      toast.error("Failed to delete blog");
                    }
                  }}
                >
                  Delete Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
BlogCard.propTypes = {
  blog: {
    title: propTypes.string,
    description: propTypes.string,
    author: propTypes.string,
    id: propTypes.number,
  },
};
export default BlogCard;
