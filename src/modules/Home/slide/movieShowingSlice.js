import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../../apis/movie";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getMovieShowing = createAsyncThunk(
  "home/movieShowing/getMovies",
  async (_, { rejectWithValue }) => {
    return await getMovies();
    // try {
    //   const { data } = await getMovies();
    //   return data.content;
    // } catch (error) {
    //   return rejectWithValue(error.response.data.content);
    // }
  }
);

const movieShowingSlice = createSlice({
  name: "home/movieShowing",
  initialState,
  extraReducers: {
    [getMovieShowing.pending]: (state, action) => {
      return { ...state, isLoading: true };
    },
    [getMovieShowing.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    },
    [getMovieShowing.rejected]: (state, action) => {
      console.log(action);
      return { ...state, error: action.error.message, isLoading: false };
    },
  },
});

export default movieShowingSlice.reducer;
