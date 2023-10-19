import ShippingAddress, { IShippingAddress } from "@/app/shipping_address/page";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  shippingAddress: IShippingAddress | null;
}

const initialState: InitialState = {
  shippingAddress: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { addAddress } = serviceSlice.actions;
export default serviceSlice.reducer;
