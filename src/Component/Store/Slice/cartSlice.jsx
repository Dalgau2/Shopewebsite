import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // quantity: 0,
  },
  reducers: {
    addItem(state, action) {
      //   state.items.push(action.payload)
      const exisitItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exisitItem >= 0) {
        state.items[exisitItem].quantity += 1;
      } else {
        const updateItem = { ...action.payload, quantity: 1 };
        state.items.push(updateItem);
      }
    },
    removeItem(state, action) {
      //
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
