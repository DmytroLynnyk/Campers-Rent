import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchOneCamper } from '../campers/operation.js';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.campers = [];
  state.chosenCamper = {};
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    chosenCamper: {},
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
        state.chosenCamper = {};
      })
      .addCase(fetchAllCampers.rejected, handleRejected)

      .addCase(fetchOneCamper.pending, handlePending)
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chosenCamper = action.payload;
      })
      .addCase(fetchOneCamper.rejected, handleRejected);
  },
});

export const camperReducer = slice.reducer;
