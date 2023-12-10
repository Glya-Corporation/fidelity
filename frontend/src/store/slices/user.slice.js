/* import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const usersliceSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getUserThunk = id => (dispatch) => {
    return axios.get('')
        .then(() => dispatch(''))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setUser } = usersliceSlice.actions;

export default usersliceSlice.reducer;
 */