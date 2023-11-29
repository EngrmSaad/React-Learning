import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createDemo = createAsyncThunk(
      //action type string
      'demoOfProduct/createDemo',
      //callback function
      async(demo, {rejectWithValue})=>{
        console.log(demo,rejectWithValue)

        try{
            const response = await axios.post("")
            return response;

        } catch (error){
      return rejectWithValue("Opps there seems to be an error");
         
        }
      }
)