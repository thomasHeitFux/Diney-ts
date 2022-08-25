import React, { useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {  Character, fetchUsers } from '../actions';
import { StoreState } from '../reducer';
import style from '../components/App.module.css'

  function App() {
	const characters = useSelector((state:StoreState)=>state.characters);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch<any>(fetchUsers())
	}, []);

	return (
		<div>
			<button onClick={fetchUsers}>FETCH CHARACTERS!</button>
		<section className={style.container}>
			{characters?characters.map((e:Character)=>{
			
				return(
					
						<div className={style.card} key={e.name}>
						<h1>{e.name}</h1>
						<img src={e.imageUrl} alt="" />
						</div>
					
				) 
			})
			:(<h1>sory</h1>)}
		</section></div>
	);
}

export default App
