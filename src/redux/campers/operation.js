import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../apiServices/api';

export const fetchCampers = createAsyncThunk(
  'fetchCampers',
  async (_, thunkAPI) => {
    try {
      const response = await api('/campers');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
