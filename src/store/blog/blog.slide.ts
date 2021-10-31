import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'blog',
  initialState: {
    blogDetail: null,
  },
  reducers: {},
});

/* eslint-disable */
export const {} = counterSlice.actions;

export default counterSlice.reducer;
