
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    blogLists :[],
    isError :false,
    isLoading:false,
    errorMessage:""
}

export const getBlogList = createAsyncThunk ("blog/getBlogList", async () => {
    const resp = await axios.get("http://localhost:3000/blogs")
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

}})


export default blogSlice.reducer