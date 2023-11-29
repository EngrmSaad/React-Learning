// this file contain reducer part of admin LL.
import { createSlice } from "@reduxjs/toolkit";
const CunsaltaionSlice = createSlice({
  name: "Cunsaltaion",
  initialState: {
    Cunsaltaion: [],

    isFetching: false,
    error: false,
  },
  reducers: {
    //GET AdminCL
    getAdminDDStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAdminDDSuccess: (state, action) => {
      state.isFetching = false;
      state.Cunsaltaion = action.payload;
    },
    getAdminDDFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    createAdminDDStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createAdminDDSuccess: (state, action) => {
      state.isFetching = false;
      state.Cunsaltaion = action.payload;
    },
    createAdminDDFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateAdminDDStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAdminDDSuccess: (state, action) => {
      state.isFetching = false;
      state.Cunsaltaion = action.payload;
    },
    updateAdminDDFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteAdminDDStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAdminDDSuccess: (state, action) => {
      state.isFetching = false;
      state.Cunsaltaion = action.payload;
    },
    deleteAdminDDFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getAdminDDStart,
  getAdminDDFailure,
  getAdminDDSuccess,
  createAdminDDFailure,
  createAdminDDStart,
  createAdminDDSuccess,
  updateAdminDDStart,
  updateAdminDDSuccess,
  updateAdminDDFailure,
  deleteAdminDDStart,
  deleteAdminDDFailure,
  deleteAdminDDSuccess,
} = CunsaltaionSlice.actions;

export default CunsaltaionSlice.reducer;
