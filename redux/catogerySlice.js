import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const getCatogery = createAsyncThunk("getCatogeryData", async () => {
  try {
    const res = await api.get(`catogery`);
    console.log(res.data.catogeries, "mm");

    return res.data.catogeries;
  } catch (error) {
    console.log(error);
  }
});

export const addCatogery = createAsyncThunk("addCatogery", async (values) => {
  try {
    const res = await api.post(`add/catogery`, values);
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  catData: [],
  loading: false,
  errror: "",
};

const Catogeryslice = createSlice({
  name: "handleCatogery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatogery.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCatogery.fulfilled, (state, action) => {
      (state.loading = false), (state.catData = action.payload);
    });
    builder.addCase(getCatogery.rejected, (state, action) => {
      (state.loading = true), (state.data = "error occurss");
    });
  },
});

export const {} = Catogeryslice.actions;

export default Catogeryslice.reducer;
