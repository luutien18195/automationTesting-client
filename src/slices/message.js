import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const messageSlide = createSlice({
  name: "message",
  initialState,
  reducers: {
    etMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});
const { reducer, actions } = messageSlide;
export const { setMessage, clearMessage } = actions;
export default reducer;
