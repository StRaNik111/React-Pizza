import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../../redux/cartSlice'
import { RootState } from '../../../redux/store';

export type PizzaType = {

	id: number
	title: string
	price: number
	imageUrl: string
	type: string
	size: number
	types: []
	sizes: []
	count: number
}

const PizzaItem: React.FC<PizzaType> = ({ id, types, sizes, imageUrl, title, price }) => {

	const dispatch = useDispatch()
	const countItem = useSelector((state: RootState) => state.cart.items.find((obj: PizzaType) => obj.id == id))
	const addedCount = countItem ? countItem.count : 0
	let [activeType, setActiveType] = React.useState(0)
	let [sizeID, setSize] = React.useState(0)

	const changeActiveClass = (set: any, num: number) => {
		set(num)
	}
	const typesElements = ['тонкое', 'традиционное']

	const pizzaTypes = types.map((typeId: number) => {
		return <li key={typeId} onClick={() => changeActiveClass(setActiveType, typeId)} className={activeType === typeId ? 'active' : ''}>{typesElements[typeId]}</li>
	})
	const pizzaSizes = sizes.map((size: number, index: number) => {
		return <li onClick={() => changeActiveClass(setSize, index)} className={sizeID === index ? 'active' : ''} key={index}>{size} см.</li>
	})

	const onClickAddProduct = () => {
		const obj: PizzaType = {
			id: id,
			imageUrl: imageUrl,
			title: title,
			price: price,
			type: typesElements[activeType],
			size: sizes[sizeID],
			types: [],
			sizes: [],
			count: 0
		}
		dispatch(addProduct(obj))
	}
	return (
		<div className="pizza-block">
			<Link to={`pizza/${id}`}>
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
			</Link>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
				<ul>
					{pizzaTypes}
				</ul>
				<ul>
					{pizzaSizes}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<div onClick={onClickAddProduct} className="button button--outline button--add">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
					</svg>
					<span >Добавить</span>
					{addedCount > 0 && <i>{addedCount}</i>}
				</div>
			</div>
		</div>
	);
}

export default PizzaItem;