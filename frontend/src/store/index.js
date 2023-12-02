import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/product.slice.js'

export default configureStore({
    reducer: {
      product: productSlice
    }
})
