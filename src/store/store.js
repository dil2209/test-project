import { configureStore } from '@reduxjs/toolkit'
import  oquvchiReducer  from './OquvchiSlice'

export default configureStore({
  reducer: {
    oquvchiReducer
  },
})