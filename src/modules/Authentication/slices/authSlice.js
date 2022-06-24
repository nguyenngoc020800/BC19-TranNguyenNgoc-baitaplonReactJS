import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../apis/authentication";
// import { useNavigate } from "react-router-dom";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk("auth/login", async (payload) => {
  const data = await authAPI.login(payload);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
});

export const register = createAsyncThunk("auth/register", async (payload) => {
  return await authAPI.register(payload);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deletelError: (state) => state.error === null,
  },
  extraReducers: {
    [login.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [login.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, isLoading: false, user: action.payload };
    },
    [login.rejected]: (state, action) => {
      return { ...state, error: action.error.message, isLoading: false };
    },
    [register.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [register.fulfilled]: (state, action) => {
      // const navigate = useNavigate();
      // navigate("/login");
      return { ...state, isLoading: false };
    },
    [register.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    },
  },
});
export default authSlice.reducer;
