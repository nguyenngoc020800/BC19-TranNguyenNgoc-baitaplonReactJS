import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slide/bannerSlice";
import movieShowingSlice from "./modules/Home/slide/movieShowingSlice";
import movieDetailSlice from "./modules/Movie/slices/movieDetailSlice";
import cinemaSlice from "./modules/Home/slide/cinemaSlice";
import authSlice from "./modules/Authentication/slices/authSlice";
import movieShowTimeSlice from "./modules/Movie/slices/movieShowTimeSlice";
import movieBookingTicketSlice from "./modules/Movie/slices/movieBookingTicket";
import adminMovieSlice from "./modules/AdminMovie/slices/adminMovieSlice";
const store = configureStore({
  reducer: {
    banner: bannerSlice,
    movieShowing: movieShowingSlice,
    movieDetail: movieDetailSlice,
    auth: authSlice,
    cinema: cinemaSlice,
    movieShowTime: movieShowTimeSlice,
    movieBookingTicket: movieBookingTicketSlice,
    adminMovie: adminMovieSlice,
  },
});

export default store;
