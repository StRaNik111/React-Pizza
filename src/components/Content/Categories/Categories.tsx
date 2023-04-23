import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { homeSelector, setCategoriesId } from '../../../redux/homeSlice';

const Categories: React.FC = () => {
	const { categories, categoriesId } = useSelector(homeSelector)
	const dispatch = useDispatch()

	const categoriesList = categories.map((item: string, index: number) => {
		return <li onClick={() => dispatch(setCategoriesId(index))} className={categoriesId === index ? 'active' : ''} key={index}>{item}</li>
	})


	return (
		<div className="categories">
			<ul>
				{categoriesList}
			</ul>
		</div>
	);
}

export default Categories;