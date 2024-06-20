import blogSlices from "./slices/blogSlices";


const store = configureStore({
    reducer: {
      blog:blogSlices
    },
  
    
});
export default store