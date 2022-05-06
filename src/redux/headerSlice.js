import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    isOpen: true,
  },

  reducers: {
    toggleHeader: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
  },
});

export const { toggleHeader } = headerSlice.actions;

export default headerSlice.reducer;
