import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
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
    increaseQuantity(state, action) {
      const finditem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (finditem >= 0) {
        state.items[finditem].quantity += 1;
      } else {
        toast.error("somthing went wrong", !{ autoClose: 1000 });
      }
    },
    decreaseQuantity(state, action) {
      const finditem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if(state.items[finditem].quantity>1){
        state.items[finditem].quantity--
      }else(
        state.items.splice(finditem,1)
      )
    },
    deleteItem(state,action){
      const finditem=state.items.findIndex((item)=>item.id===action.payload.id)
     if(finditem>=0){
      state.items.splice(finditem,1)
     }else{
      toast.error("error")
     }
    }
  },
});
export const { addItem, removeItem, increaseQuantity, decreaseQuantity,deleteItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
