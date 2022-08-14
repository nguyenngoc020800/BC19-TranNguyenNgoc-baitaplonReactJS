import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cinemaAPI from "../../../apis/cinema";
const initialState = {
  brandData: [],
  brandSystemData: null,
  isLoading: false,
  error: null,
};
export const getBrands = createAsyncThunk("cinema/getBrand", async () => {
  return await cinemaAPI.getBrand();
});
export const getCinemaSystemInfors = createAsyncThunk(
  "cinema/getCinemaSystemInfor",
  async () => {
    return await cinemaAPI.getCinemaSystemInfor();
  }
);
const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  extraReducers: {
    [getBrands.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getBrands.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, isLoading: false, brandData: action.payload };
    },
    [getBrands.rejected]: (state, action) => {
      console.log(action);
      return { ...state, error: action.error.message, isLoading: false };
    },
    [getCinemaSystemInfors.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getCinemaSystemInfors.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, isLoading: false, brandSystemData: action.payload };
    },
    [getCinemaSystemInfors.rejected]: (state, action) => {
      console.log(action);
      return { ...state, error: action.error.message, isLoading: false };
    },
  },
});

export default cinemaSlice.reducer;
