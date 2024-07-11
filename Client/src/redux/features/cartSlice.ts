import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "./productSlice";
import { RootState } from "../store";

export interface CartItem extends TProduct {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalCost: number;
}

const initialState: CartState = {
  items: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        if (existingItem.quantity < existingItem.stock) {
          existingItem.quantity += 1;
          existingItem.stock -= 1;
          state.totalCost += existingItem.price;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalCost += action.payload.price;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;

// removeFromCart: (state, action: PayloadAction<string>) => {
//   const index = state.items.findIndex(item => item._id === action.payload);
//   if (index !== -1) {
//     const item = state.items[index];
//     state.totalCost -= item.price * item.quantity;
//     state.items.splice(index, 1);
//   }
// },
// clearCart: (state) => {
//   state.items = [];
//   state.totalCost = 0;
// },
