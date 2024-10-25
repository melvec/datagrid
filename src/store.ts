import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./redux/api";
import itemReducer from "./redux/itemSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
