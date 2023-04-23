import { PizzaType } from "../components/Content/PizzaItem/PizzaItem"


export const calcTotalPrice = (items: PizzaType[]) => {
	return items.reduce((sum: number, obj) => {
		return (obj.price * obj.count) + sum
	}, 0)
}