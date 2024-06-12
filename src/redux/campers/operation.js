import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../apiServices/api';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api('/campers');

      const normalizedData = response.data.map(
        ({
          _id,
          name,
          price,
          rating,
          location,
          adults,
          engine,
          transmission,
          form,
          description,
          details,
          gallery,
        }) => ({
          _id,
          name,
          price,
          rating,
          location,
          properties: {
            adults,
            engine,
            transmission,
            ...details,
          },
          form,
          description,
          photo: gallery[0],
          favorite: false,
        })
      );

      return normalizedData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  'campers/fetchOne',
  async ({ _id }, thunkAPI) => {
    try {
      const response = await api(`/campers/${_id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
