import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const getWishlist = createAsyncThunk("getWishlist", async () => {
  try {
    const res = await api.get(`wishlist`);
    console.log(res.data.wishlist);

    return res.data.wishlist.products;
  } catch (error) {
    console.log(error);
  }
});

export const addWishlists = createAsyncThunk(
  "addWishlist",
  async (productId) => {
    try {
      const res = await api.post(`add/wishlist/${productId}`);
      return res.data.message;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteWishlists = createAsyncThunk(
  "deleteWishlists",
  async (productId) => {
    try {
      const res = await api.post(`delete/wishlist/${productId}`);
      return res.data.message;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  wishlistData: [],
  loading: false,
  errror: "",
};

const wishlistSlice = createSlice({
  name: "handleWishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWishlist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      (state.loading = false), (state.wishlistData = action.payload);
    });
    builder.addCase(getWishlist.rejected, (state, action) => {
      (state.loading = true), (state.errror = "error occurss");
    });
  },
});

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
