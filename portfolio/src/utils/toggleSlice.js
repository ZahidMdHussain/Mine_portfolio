import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleMenuSlice: false,
  },
  reducers: {
    togglebtw: (state) => {
      state.toggleMenuSlice = !state.toggleMenuSlice;
    },
  },
});

export const { togglebtw } = toggleSlice.actions;
export default toggleSlice.reducer;
