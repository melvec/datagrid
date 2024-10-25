import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../axios/dataAxios";

// Define the types for the state
interface ItemState {
  items: Item[];
}

// Define the initial state
const initialState: ItemState = {
  items: [],
};

// Create the slice
const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

// Export actions and reducer
const { reducer: itemReducer, actions } = itemSlice;
export const { setItems } = actions;
export default itemReducer;
