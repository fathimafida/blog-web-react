
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    blogLists :[],
    isError :false,
    isLoading:false,
    errorMessage:""
}

export const getBlogList = createAsyncThunk ("blog/getBlogList", async () => {
    const resp = await axios.get("http://localhost:3000/blogs/")
    return resp.data
})

export const createBlog = createAsyncThunk("blog,createBlog",async(data)=>{
    const response = await axios.post("http://localhost:3000/blogs/",data)
    return response.data
})

export const deleteBlog = createAsyncThunk("blog/deleteBlog",async(id)=>{
    const resp = await axios.delete(`http://localhost:3000/blogs/${id}/`,)
    return resp.data
})

export const editBlog = createAsyncThunk("blog/editBlog",async(data)=>{
    const resp= await axios.patch(`http://localhost:3000/blogs/${data.id}/`,data)
    return resp.data
})

const blogSlice = createSlice({
    name:"blog",
    initialState:initialState,
    reducer:{
    
    },
    extraReducers:(builder)=>{
        builder.addCase(getBlogList.pending,(state)=>{
            state.isLoading =true
            
        })
        .addCase(getBlogList.fulfilled,(state,action)=>{
            state.isLoading =false
         state.blogLists = action.payload
        
        })
       .addCase(getBlogList.rejected,(state,action)=>{
            state.isLoading =false
             state.isError = true
            state.errorMessage = action.error.message
        })
        .addCase(createBlog.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(createBlog.fulfilled,(state)=>{
            state.isLoading =false
        })
        .addCase(createBlog.rejected,(state,action)=>{
            state.isLoading =false
             state.isError = true
            state.errorMessage = action.error.message
        })
        .addCase(deleteBlog.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(deleteBlog.fulfilled,(state)=>{
            state.isLoading =false
        })
        .addCase(deleteBlog.rejected,(state,action)=>{
            state.isLoading =false
             state.isError = true
            state.errorMessage = action.error.message
        })
      .addCase(editBlog.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(editBlog.fulfilled,(state)=>{
            state.isLoading =false
        })
        .addCase(editBlog.rejected,(state,action)=>{
            state.isLoading =false
             state.isError = true
            state.errorMessage = action.error.message
        })
}})


export default blogSlice.reducer