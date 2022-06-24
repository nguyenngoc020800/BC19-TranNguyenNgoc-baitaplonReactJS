import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slide/bannerSlice";
import movieShowingSlice from "./modules/Home/slide/movieShowingSlice";
import movieDetailSlice from "./modules/Movie/slices/movieDetailSlice";
import authSlice from "./modules/Authentication/slices/authSlice";
const store = configureStore({
  reducer: {
    banner: bannerSlice,
    movieShowing: movieShowingSlice,
    movieDetail: movieDetailSlice,
    auth: authSlice,
  },
});

export default store;
