import { createSlice } from "@reduxjs/toolkit";
import { createDemo } from "../Redux-Api/ProductDemoApi";




const initialState = {
    de : [],
    isFetching: false,
    error : ""
}

const productDemo = createSlice(
    {
name: "demoOfProduct",
initialState,
reducers:{},
extraReducers: (builder)=>{
 builder.addCase(createDemo.pending, (state) =>{
    state.isFetching = true
 })
 builder.addCase(createDemo.fulfilled, (state, action) =>{
    state.isFetching = false;
    state.demo = action.payload;
    state.error = "";
 })
 builder.addCase(createDemo.rejected, (state, action)=>{
    state.isFetching = false;
        state.demo = [];
        state.error = action.error;
 })
}
    }
)
export default productDemo.reducer