import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const getsubCatogery = createAsyncThunk(
  "subCatData",
  async (categoryId) => {
    try {
      const res = await api.get(`subcatogery/${categoryId}`);
      return res.data.subCatogery;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addSubCatogery = createAsyncThunk(
  "addSubCatData",
  async (values) => {
    try {
      const res = await api.post(`add/subcatogery`, values);
      return res.data.message;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  subCatdata: [],
  loading: false,
  errror: "",
};

const subCatogeryslice = createSlice({
  name: "handlesubCat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsubCatogery.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getsubCatogery.fulfilled, (state, action) => {
      (state.loading = false), (state.subCatdata = action.payload);
    });
    builder.addCase(getsubCatogery.rejected, (state, action) => {
      (state.loading = true), (state.data = "error occurss");
    });
  },
});

export const {} = subCatogeryslice.actions;

export default subCatogeryslice.reducer;
