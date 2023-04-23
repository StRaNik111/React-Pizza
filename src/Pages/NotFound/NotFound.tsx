import { Link } from "react-router-dom";
import * as React from 'react';

const NotFound: React.FC = () => {
	return (
		<div className="content">
			<div className="container container--cart">
				<div className="cart cart--empty">
					<h2>  Ничего не найдено 😕</h2>
					<Link to='/' className="button button--black">
						<span>Вернуться назад</span>
					</Link>
				</div>
			</div>
		</div>

	)

}



export default NotFound;