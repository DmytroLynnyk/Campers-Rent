import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'apiServices/api.js';

export const fetchCampers = createAsyncThunk(
  'fetchCampers',
  async (_, thunkAPI) => {
    // async (showedCamps, thunkAPI) => {
    try {
      const response = await api('/campers');
      // response.campersCount = response.data.length;

      // response.promoImages = response.data.map(camper => {
      //   return { [camper.name]: camper.gallery[0] };
      // });

      // const { data, campersCount, promoImages } = response;
      // const editedData = data.slice(0, showedCamps);
      // const EditedResponse = { data: editedData, campersCount, promoImages };
      // return EditedResponse;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
