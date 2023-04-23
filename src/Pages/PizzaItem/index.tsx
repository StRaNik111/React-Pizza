import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "../../components/Content/PizzaItem/Skeleton";

type pizzaType = {
	imageUrl: string
	title: string
	price: number
}

const PizzaItem: React.FC = () => {
	const [pizzaItem, setPizzaItem] = React.useState<pizzaType>();

	const { id } = useParams()
	const navigate = useNavigate()
	useEffect(() => {

		async function fetchPizzaItem() {
			try {
				const response = await axios.get(`https://641432586608bd50d0aeb9a9.mockapi.io/items/${id}`)
				setPizzaItem(response.data)
			} catch (error) {
				alert(error)
				navigate('/')
			}
		}
		fetchPizzaItem()
	}, [])


	return (
		<div className="content">
			<div className="container">
				{!pizzaItem
					? <Skeleton />
					:
					<div className="pizza-item">
						<img className="pizza-item__img" src={pizzaItem.imageUrl} alt="Pizza image" />
						<h1 className="pizza-item__title">{pizzaItem.title}</h1>
						<h4 className="pizza-item__price">{pizzaItem.price} ₽</h4>

					</div>

				}
			</div>
		</div>
	);
}

export default PizzaItem;