import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductData = createAsyncThunk(
  "productData",
  async (search) => {
    console.log(search);

    try {
      console.log(search, "hh");

      const res = await axios.get(
        `http://localhost:406/api/products?search=${search}`
      );
      return res.data.products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductById = createAsyncThunk("productById", async (id) => {
  try {
    const res = await axios.get(`http://localhost:406/api/products/${id}`);
    return {
      product: res.data.product,
      varients: res.data.varients,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  data: [],
  dataById: [],
  varients: [],
  loading: false,
  errror: "",
};

const productSlice = createSlice({
  name: "handleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductData.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload);
    });
    builder.addCase(getProductData.rejected, (state, action) => {
      (state.loading = true), (state.errror = "error occurss");
    });
    builder.addCase(getProductById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
        state.varients = action.payload.varients;
      });
    builder.addCase(getProductById.rejected, (state, action) => {
      (state.loading = true), (state.errror = "error occurss");
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
