import styles from './Search.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../../../redux/homeSlice'
import debounce from 'lodash.debounce'
import React from 'react'


const Search: React.FC = () => {
	const dispatch = useDispatch()
	const inpRef = React.useRef<HTMLInputElement>(null)
	const [searchLocal, setSearchLocal] = React.useState('');

	const testDebounce = React.useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str))
		}, 500), []
	)
	const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchLocal(e.target.value)
		testDebounce(searchLocal)
	}
	const clearInput = () => {
		dispatch(setSearchValue(''))
		setSearchLocal('')
		if (inpRef.current) {
			inpRef.current.focus()
		}
	}
	return (
		<div className={styles.root}>
			<div className={styles.inpBody}>
				<input ref={inpRef} onChange={updateSearchValue} type="text" value={searchLocal} className={styles.input} placeholder="Найти пиццу" />
				{searchLocal &&

					<div onClick={clearInput} className={styles.cross}>
						<svg fill="#000000" version="1.1" id="Capa_1" width="18px" height="18px" viewBox="0 0 95.939 95.939" >
							<g>
								<path d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0   c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608   c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021   c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535   c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97   z" />
							</g>
						</svg>
					</div>
				}


			</div>

			<div className={styles.searchIcon}>
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
			</div>
		</div>
	);
}

export default Search;