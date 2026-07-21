import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/counter/cartSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
})