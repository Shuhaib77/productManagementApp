import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../src/service/api";

export const getProductData = createAsyncThunk(
  "productData",
  async ({ search = "", subCatIds = [] }) => {
    const res = await api.get("products", {
      params: { search, subCatIds: subCatIds.join(",") },
    });
    return res.data.products;
  }
);

export const getProductById = createAsyncThunk("productById", async (id) => {
  try {
    const res = await api.get(`products/${id}`);
    return {
      product: res.data.product,
      varients: res.data.varients,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addProduct = createAsyncThunk("addProduct", async (formData) => {
  try {
    const res = await api.post(`add/product`, formData);
    return res.data.message;
  } catch (error) {
    console.log(error);
    throw error;
  }
});


export const editProduct = createAsyncThunk("editProduct", async ({formData,productId}) => {
    console.log(productId,"pp");
    
    try {
      const res = await api.put(`update/product/${productId}`, formData,);
      return res.data.message;
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
