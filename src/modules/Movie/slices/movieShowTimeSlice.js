import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieShowTime } from "../../../apis/movie";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getMovieShowTimes = createAsyncThunk(
  "movie/showTime/getMovieShowTime",
  async (movieID) => {
    return await getMovieShowTime(movieID);
  }
);

const movieShowtimeSlice = createSlice({
  name: "movie/showTime",
  initialState,
  extraReducers: {
    [getMovieShowTimes.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getMovieShowTimes.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, data: action.payload, isLoading: false };
    },
    [getMovieShowTimes.rejected]: (state, action) => {
      console.log(action);
      return { ...state, error: action.error, isLoading: false };
    },
  },
});
export default movieShowtimeSlice.reducer;
