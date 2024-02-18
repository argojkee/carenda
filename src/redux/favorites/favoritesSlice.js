import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesCars: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoritesCars = [...state.favoritesCars, action.payload];
    },
    deleteFavoriteCar: (state, action) => {
      state.favoritesCars = state.favoritesCars.filter(
        (car) => car.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = favoritesSlice.actions;
export default favoritesSlice.reducer;
