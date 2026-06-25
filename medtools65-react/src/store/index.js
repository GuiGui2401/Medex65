import { configureStore } from '@reduxjs/toolkit'
import authReducer     from './slices/authSlice'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'
import uiReducer       from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    auth:       authReducer,
    products:   productsReducer,
    categories: categoriesReducer,
    ui:         uiReducer,
  },
  middleware: (getDefault) => getDefault({ serializableCheck: false }),
})

export default store
