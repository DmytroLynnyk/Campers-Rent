import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from '../campers/operation.js';
// import { produce } from 'immer';

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
    showedVans: 4,
    isLoading: false,
    error: null,
    // favoritesIDs: [],
    // filters: {},
  },
  //   reducers: {
  //     switchLoading: (state, action) => {
  //       state.isLoading = action.payload;
  //     },
  //     showMore: (state, action) => {
  //       state.showedVans = action.payload;
  //     },
  //     toggleFavorite: (state, action) => {
  //       const _id = action.payload;
  //       state.campers.data = produce(state.campers.data, draft => {
  //         const favoriteCamper = draft.find(camper => camper._id === _id);
  //         if (favoriteCamper) {
  //           favoriteCamper.favorite = !favoriteCamper.favorite;
  //         }
  //       });
  //       if (!state.favoritesIDs.includes(_id)) {
  //         state.favoritesIDs = [...state.favoritesIDs, _id].sort((a, b) => {
  //           return a - b;
  //         });
  //       } else {
  //         state.favoritesIDs = [...state.favoritesIDs].filter(id => id !== _id);
  //       }
  //     },
  //     setFilters: (state, action) => {
  //       state.filters = action.payload;
  //     },
  //     resetFilters: state => {
  //       state.filters = {};
  //     },
  //   },

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

// export const {
//   switchLoading,
//   showMore,
//   toggleFavorite,
//   setFilters,
//   resetFilters,
// } = slice.actions;
export const camperReducer = slice.reducer;
