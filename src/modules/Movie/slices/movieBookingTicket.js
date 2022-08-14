import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBookingInfor } from "../../../apis/movieBookingTicket";

const initialState = {
  veSapMua: [],
  veDaMua: [],
  data: [],
  isLoading: false,
  error: null,
};

export const getBookingInfors = createAsyncThunk(
  "movie/ticket/getBookingInfor",
  async (maLichChieu) => {
    return await getBookingInfor(maLichChieu);
  }
);

const bookingTicketSlice = createSlice({
  name: "movie/ticket",
  initialState,
  reducers: {
    addOrRemoveTicket(state, action) {
      // console.log(action.payload);
      const found = state.veSapMua?.findIndex(
        (ve) => ve.maGhe === action.payload.maGhe
      );
      // console.log("tim", found);
      if (found === -1) {
        state.veSapMua = [...state.veSapMua, action.payload];
        return;
      }
      const found2 = state.veSapMua?.filter(
        (ve) => ve.maGhe !== action.payload.maGhe
      );
      state.veSapMua = found2;
    },
    finishBooking(state, action) {
      state.veDaMua = state.veDaMua.concat(state.veSapMua);
      state.veSapMua = [];
    },
  },
  extraReducers: {
    [getBookingInfors.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getBookingInfors.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, isLoading: false, data: action.payload };
    },
    [getBookingInfors.rejected]: (action, state) => {
      console.log(action);
      return { ...state, isLoading: false, error: action.error };
    },
  },
});

export const { addOrRemoveTicket, finishBooking } = bookingTicketSlice.actions;
export default bookingTicketSlice.reducer;
