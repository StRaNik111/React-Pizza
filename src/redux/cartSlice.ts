import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaType } from '../components/Content/PizzaItem/PizzaItem'
import { calcTotalPrice } from '../utils/calcTotalProci'
import { getCartFromLS } from '../utils/getCartFromLS'
import { RootState } from './store'




interface CartType {
	totalPrice: number
	items: PizzaType[]
}

const { items, totalPrice } = getCartFromLS()
const initialState: CartType = {
	totalPrice,
	items
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<PizzaType>) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}
			state.totalPrice = calcTotalPrice(state.items)
		},

		minusProduct(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload)
			if (findItem) {
				findItem.count--
			}
		},
		removeProduct(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},
		clearProducts(state) {
			state.items = []
			state.totalPrice = 0
		}
	},
})

export const cartSelector = (state: RootState) => state.cart

export const { addProduct, clearProducts, removeProduct, minusProduct } = cartSlice.actions

export default cartSlice.reducer