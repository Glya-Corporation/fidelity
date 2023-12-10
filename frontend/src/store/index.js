import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/product.slice.js'
import userSlice from './slices/user.slice.js'

export default configureStore({
    reducer: {
      product: productSlice,
      user: userSlice
    }
})
