import { configureStore } from "@reduxjs/toolkit";
import AdminDDReducer from "./Reducer/CunsultantSubmitionReducer";


export default configureStore({
  reducer: {
    Cunsaltaion: AdminDDReducer,
    
  },
});
