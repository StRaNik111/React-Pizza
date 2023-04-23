import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortedReadonlyArray } from 'typescript';
import { RootState } from './store'



// 'Все'| 'Мясные'| 'Вегетарианская'| 'Гриль'| 'Острые'| 'Закрытые'
export interface HomeType {
	categories: string[]
	categoriesId: number
	sortItems: string[]
	sortValue: string
	searchValue: string
	pageCount: number
}
const initialState: HomeType = {
	categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
	categoriesId: 0,
	sortItems: ['популярности', 'цене', 'алфавиту'],
	sortValue: '',
	searchValue: '',
	pageCount: 1
}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setCategoriesId: (state, index: PayloadAction<number>) => {
			state.categoriesId = index.payload
		},
		setSortValue: (state, value: PayloadAction<string>) => {

			switch (value.payload) {
				case 'популярности':
					state.sortValue = 'rating'
					break;
				case 'цене':
					state.sortValue = 'price'
					break;
				case 'алфавиту':
					state.sortValue = 'alfabet'
					break;
				default:
					break;
			}
		},
		setSearchValue(state, value: PayloadAction<string>) {
			state.searchValue = value.payload
		},
		setPageCount(state, value: PayloadAction<number>) {
			state.pageCount = value.payload
		},
	},
})

export const homeSelector = (state: RootState) => state.home

export const { setCategoriesId, setSortValue, setSearchValue, setPageCount } = homeSlice.actions

export default homeSlice.reducer