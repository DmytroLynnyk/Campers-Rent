import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from '../campers/operation.js';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'camperData',
  initialState: {
    campers: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const camperReducer = slice.reducer;
