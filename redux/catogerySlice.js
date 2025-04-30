import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCatogery = createAsyncThunk("CatogeryData", async () => {
  try {
    const res = await axios.get(`http://localhost:406/api/catogery`)
    return res.data.catogeries
  } catch (error) {
    console.log(error)
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
