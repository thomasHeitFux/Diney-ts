import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPage, fetchUsers, numberPage } from '../../actions';
import { StoreState } from '../../reducer';
import style from '../Home/Home.module.css';
import '../Home/Home.module.css'
import { Character } from '../../interfaces';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

function Home() {
	const characters = useSelector((state: StoreState) => state.characters);
	const page = useSelector((state: StoreState) => state.page);
	const dispatch = useDispatch()
	const [num, setNum] = useState<number>(page);

	useEffect(() => {
		dispatch<any>(fetchUsers())
		dispatch<any>(numberPage(num))
	}, []);

	useEffect(() => {
		dispatch<any>(numberPage(num))
		dispatch<any>(fetchPage(num))
	}, [num]);

	return (
		<div >
			<nav className='sticky-top fixed-top'>
				<SearchBar />
			</nav>
			<div className={style.buttons}>
				{num > 1 && <button onClick={() => setNum(num - 1)}>Prev</button>}
				<h3>{page}</h3>
				{num < 149 && <button onClick={() => setNum(num + 1)}>Next</button>}
			</div>
			<section className={style.container}>
				{characters ? characters.map((e: Character) => {

					return (
						<Link to={`/detail/${e._id}`} key={e._id} style={{ textDecoration: 'none', color: 'black' }}>
							<div className="card shadow  mb-5  rounded bg-transparent" style={{ width: 258, height: 400 }} key={e._id}>
								<img src={e.imageUrl} className="card-img-top" style={{ height: 250 }} />
								<div className="card-body">
									<p className="card-text"><h4 className={style.name} key={e._id}>{e.name}</h4></p>
								</div>
							</div>
						</Link>
					)
				})
					: (<h1>sory</h1>)}
			</section>
			<div className={style.buttons}>
				{num > 1 && <button onClick={() => setNum(num - 1)}>Prev</button>}
				<h3>{page}</h3>
				{num < 149 && <button onClick={() => setNum(num + 1)}>Next</button>}
			</div></div>
	);
}

export default Home;

