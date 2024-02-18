import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastError, toastSuccess } from "../../helpers/toastNotification";

const BASE_URL = "https://65cd1df6dd519126b84024bb.mockapi.io/api/v1";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async (limit, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/cars?page=1&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotal = createAsyncThunk(
  "cars/getTotal",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/cars`);
      return data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCars = createAsyncThunk(
  "cars/loadMore",
  async (data, thunkAPI) => {
    const { page, total } = data;
    try {
      const { data } = await axios.get(
        `${BASE_URL}/cars?page=${page}&limit=12`
      );
      toastSuccess(`We have find new ${data.length} cars`);

      if (page * 12 >= total) {
        toastSuccess("Sorry, this is the last page with cars");
      }
      return data;
    } catch (error) {
      toastError("Oops, something went wrong... Please, try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
