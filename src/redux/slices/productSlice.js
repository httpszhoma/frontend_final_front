import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchProductsByCategoryAndBrand = createAsyncThunk(
    "products/fetchProductsByCategoryAndBrand",
    async () => {
      try {
          const url = `/categories/1/products?page=0&pageSize=20`;
        const response = await api.get(url);
        return response.data; // Array of products
      } catch (error) {
         alert((error.response?.data?.message || "Failed to fetch products"));
      }
    }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBrands(state, action) {
      state.brands = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProductsByCategoryAndBrand.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProductsByCategoryAndBrand.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchProductsByCategoryAndBrand.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export const { setBrands } = productSlice.actions;
export default productSlice.reducer;
