import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./redux/itemSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
