import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilmList } from "../../../apis/adminMovie";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getFilmLists = createAsyncThunk(
  "adminMovie/getFilmList",
  async () => {
    return await getFilmList();
  }
);

const adminMovieSlice = createSlice({
  name: "adminMovie",
  initialState,
  extraReducers: {
    [getFilmLists.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getFilmLists.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, data: action.payload, isLoading: false };
    },
    [getFilmLists.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    },
  },
});

export default adminMovieSlice.reducer;
