import { configureStore } from "@reduxjs/toolkit";
import blogSlices from "./slices/blogSlices";


const store = configureStore({
    reducer: {
      blog:blogSlices
    },
  
    devTools: true,
});
export default store