import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as movieAPI from "../../../apis/movie";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getBanners = createAsyncThunk(
  "home/banner/getBanner",
  async (_, { rejectWithValue }) => {
    return await movieAPI.getBanner();
    // try {
    //   const { data } = await movieAPI.getBanner();
    //   return data.content;
    // } catch (error) {
    //   return rejectWithValue(error.response.data.content);
    // }
  }
);
const bannerSlice = createSlice({
  name: "home/banner",
  initialState,
  extraReducers: {
    [getBanners.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getBanners.fulfilled]: (state, action) => {
      // console.log(action);
      return { ...state, data: action.payload, isLoading: false };
    },
    [getBanners.rejected]: (state, action) => {
      console.log(action);
      return { ...state, error: action.error.message, isLoading: false };
    },
  },
});

export default bannerSlice.reducer;
