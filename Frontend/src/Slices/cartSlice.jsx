import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
    addToCart(state, action) {
      state.totalItems += 1;
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      toast.success("Item added to cart");
    },
    removeFromCart(state, action) {
      state.totalItems -= 1;
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      toast.success("Item removed from cart");
    },
    clearCart(state, action) {
      state.totalItems = 0;
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      toast.success("Cart cleared");
    },
  },
});

export const { setTotalItems, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
