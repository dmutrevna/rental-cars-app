import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAdverts: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const advertToAdd = action.payload;
      if (!state.selectedAdverts.find(advert => advert.id === advertToAdd.id)) {
        state.selectedAdverts.push(advertToAdd);
      }
    },
    removeFromFavorites: (state, action) => {
      const advertToRemove = action.payload;
      state.selectedAdverts = state.selectedAdverts.filter(
        advert => advert.id !== advertToRemove.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
