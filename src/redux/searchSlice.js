import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail : [],
    productDetailStatus: STATUS.IDLE,
     
}

export const getProducts = createAsyncThunk("products/getAll", async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
  });

  export const getCategryProducts = createAsyncThunk(
    "getcategory",
    async (category) => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      return data;
    });

  export const getSearchProducts = createAsyncThunk(
    "searchproducts/getDetail",
    async (keyword) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    }
  );
  
  const searchSlice = createSlice({
    name: "SEARCH",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state, action) => {
          state.productsStatus = STATUS.LOADING;
        })
    },
  });
  
  export default searchSlice.reducer;