import './Pagination.scss'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux'
import { setPageCount } from '../../../redux/homeSlice';

type PaginationProps = {
	pagesCount: number
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount }) => {
	const dispatch = useDispatch()

	return (
		<>

			<ReactPaginate
				breakLabel="..."
				nextLabel=" >"
				onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
				pageRangeDisplayed={5}
				pageCount={pagesCount}
				previousLabel="< "
			/>
		</>
	);
}

export default Pagination;