import { configureStore } from '@reduxjs/toolkit'
import productSlice from ./slices/products.slice.js'

export default configureStore({
    reducer: {
      product: productSlice
    }
})
