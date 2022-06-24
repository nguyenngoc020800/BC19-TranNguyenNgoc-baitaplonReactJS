import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieDeTails } from "../../../apis/movie";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getMovieDetail = createAsyncThunk(
  "movie/detail/getMovieDetail",
  async (maPhim) => {
    return await getMovieDeTails(maPhim);
  }
);

const movieDetailSlice = createSlice({
  name: "movie/detail",
  initialState,
  extraReducers: {
    [getMovieDetail.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getMovieDetail.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, data: action.payload, isLoading: false };
    },
    [getMovieDetail.rejected]: (state, action) => {
      return { ...state, error: action.error, isLoading: false };
    },
  },
});

export default movieDetailSlice.reducer;
