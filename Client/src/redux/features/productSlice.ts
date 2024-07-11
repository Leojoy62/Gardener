import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TProduct {
  _id?: string;
  id?: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: string;
  stock: number;
}

export interface TInitialState {
  products: TProduct[];
}

const initialState: TInitialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
      console.log("Data in slice", state.products);
    },
    updateProductStock: (
      state,
      action: PayloadAction<{ id: string; stock: number }>
    ) => {
      console.log("ok");
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      const productIndex = state.products.findIndex(
        (p) => p._id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          stock: action.payload.stock,
        };
      } else {
        console.warn(`Product with id ${action.payload.id} not found.`);
      }
    },
  },
});

export const { updateProducts, updateProductStock } = productSlice.actions;

export default productSlice.reducer;
