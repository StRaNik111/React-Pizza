import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
import cartSlice from './cartSlice'
import pizzasSlice from './pizzasSlice'


const store = configureStore({
	reducer: {
		home: homeSlice,
		cart: cartSlice,
		pizzas: pizzasSlice
	}
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch