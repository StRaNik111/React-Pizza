import React from 'react';
import Categories from "../../components/Content/Categories/Categories";
import Sort from "../../components/Content/Sort/Sort";
import Skeleton from "../../components/Content/PizzaItem/Skeleton";
import PizzaItem, { PizzaType } from '../../components/Content/PizzaItem/PizzaItem';
import Pagination from '../../components/Content/Pagination';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { homeSelector, } from '../../redux/homeSlice';
import { fetchPizzasItems, pizzasSelector } from '../../redux/pizzasSlice';


const Home: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { categoriesId, sortValue, searchValue, pageCount } = useSelector(homeSelector)
	const { items, status } = useSelector(pizzasSelector)

	const categoryValue = categoriesId > 0 ? `category=${categoriesId}` : ''
	const limit = 4

	React.useEffect(() => {
		// @ts-ignore
		dispatch(fetchPizzasItems({ pageCount, limit, sortValue, categoryValue, searchValue }))
	}, [categoriesId, sortValue, searchValue, pageCount]);


	const skeletons = [... new Array(6)].map((_, index) => <Skeleton key={index} />)
	const pizzas = items.map((pizza: PizzaType) => <PizzaItem key={pizza.id} {...pizza} />)
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				{status === 'error' ? (<div className='content__error-fetch'>
					<h2>Произошлa ошибка 😕</h2>
					<p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
				</div>) : (
					<div className="content__items">
						{status === 'loading'
							? skeletons
							: pizzas}
					</div>)}
				<Pagination pagesCount={3} />
			</div>
		</div>
	);
}

export default Home;