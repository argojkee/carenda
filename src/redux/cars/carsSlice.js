import { createSlice } from "@reduxjs/toolkit";
import { getCars, getTotal, loadMoreCars } from "./carsOperations";

const initialState = {
  cars: null,
  isFirstLoading: false,
  error: null,
  total: null,
  isMoreLoading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getCars.pending, (state) => {
        state.error = null;
        state.isFirstLoading = true;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isFirstLoading = false;
        state.cars = payload;
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.isFirstLoading = false;
        state.error = payload;
      })
      .addCase(getTotal.fulfilled, (state, { payload }) => {
        state.total = payload;
      })
      .addCase(loadMoreCars.pending, (state) => {
        state.error = null;
        state.isMoreLoading = true;
      })
      .addCase(loadMoreCars.fulfilled, (state, { payload }) => {
        state.isMoreLoading = false;
        state.cars = [...state.cars, ...payload];
      })
      .addCase(loadMoreCars.rejected, (state, { payload }) => {
        state.isMoreLoading = false;
        state.error = payload;
      });
  },
});

export default carsSlice.reducer;
