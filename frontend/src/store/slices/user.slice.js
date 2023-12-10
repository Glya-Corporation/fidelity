import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../utils/apiUrl.js';
import getConfig from '../../utils/getConfig.js';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getUserThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}/user/${id}`, getConfig())
    .then(() => dispatch(setUser(res.data)))
    .catch(err => console.error(err));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
