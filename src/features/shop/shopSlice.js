import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getRandomItems } from "../../utils/utils";

const initialState = {
  shopItems: [],
  loading: false,
  error: "",
};

export const fetchItems = createAsyncThunk("shop/fetchItems", () => {
  return axios
    .get("https://fakestoreapi.com/products?limit=30")
    .then((response) => {
      return getRandomItems(response.data, 10);
    });
});
const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.shopItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default shopSlice.reducer;
