
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";
const initialState ={
    blogLists :[],
    isError :false,
    isLoading:false,
    errorMessage:""
}

export const getBlogList = createAsyncThunk ( async () => {
    const resp = await axios.get("http://localhost:3000/blogs")
})
const blogSlice = createSlice({
    name:"blog",
    initialState:initialState,
    reducer:{
    
    },
    extraReducers:(builder)=>{
        builder.addCase(getBlogList.pending,(state,action)=>{
            state.isLoading =true
        })
        addCase(getBlogList.fulfilled,(state,action)=>{
         state.blogLists =action.payload
         state.isLoading =false
        })
        addCase((getBlogList.rejected),(state,action)=>{
            state.isError =true
            state.isLoading =false
            state.errorMessage =action.error.payload
        })

}})


export default blogSlice.reducer