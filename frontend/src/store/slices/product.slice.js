import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../utils/apiUrl.js';
import getConfig from '../../utils/getConfig.js';

export const productsliceSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProducts: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getProductsThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}/product/business/${id}`, getConfig())
    .then(res => {
      dispatch(setProducts(res.data));
    })
    .catch(err => console.error(err));
};

export const { setProducts } = productsliceSlice.actions;

export default productsliceSlice.reducer;