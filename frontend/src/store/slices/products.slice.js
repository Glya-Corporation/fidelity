import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/apiUrl.js';

export const productSlice = createSlice({
  name: 'products',
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

export const { productSlice } = productSlice .actions;

export default productSlice.reducer;
