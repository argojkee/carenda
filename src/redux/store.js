import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsSlice from "./cars/carsSlice";
import favoritesSlice from "./favorites/favoritesSlice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesCars"],
};

const favoritesPersistedReducer = persistReducer(
  favoritesPersistConfig,
  favoritesSlice
);

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    favorites: favoritesPersistedReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
