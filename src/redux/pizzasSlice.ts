import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaType } from '../components/Content/PizzaItem/PizzaItem'
import { RootState } from './store'



export const fetchPizzasItems = createAsyncThunk<PizzaType[], Record<string, string>>('pizzas/fetchPizzasStatus', async (params) => {
	const { pageCount, limit, sortValue, categoryValue, searchValue } = params
	const { data } = await axios.get<PizzaType[]>(`https://641432586608bd50d0aeb9a9.mockapi.io/items?page=${pageCount}&limit=${limit}&sortBy=${sortValue}&order=desc&${categoryValue}&search=${searchValue}`)

	return data
}
)
interface PizzasType {
	items: PizzaType[]
	status: string
}

const initialState: PizzasType = {
	items: [],
	status: 'loading'
}

export const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		}
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzasItems.pending, (state) => {
				state.status = 'loading'
				state.items = []
			})
			.addCase(fetchPizzasItems.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = "success"
			})
			.addCase(fetchPizzasItems.rejected, (state) => {
				state.status = "error"
				state.items = []
			})
	},
})
export const pizzasSelector = (state: RootState) => state.pizzas
export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer