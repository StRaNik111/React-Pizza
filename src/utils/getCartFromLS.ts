import { calcTotalPrice } from "./calcTotalProci"

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart')
	const items = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(items)

	return {
		items,
		totalPrice
	}
}