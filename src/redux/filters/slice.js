import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: {},
  },

  reducers: {
    setDetails: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
