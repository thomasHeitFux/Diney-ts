import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {  fetchPage, fetchUsers } from '../../actions';
import { StoreState } from '../../reducer';
import style from '../Home/Home.module.css'
import { Character } from '../../interfaces';
import { Link } from 'react-router-dom';

  function Home() {
	const characters = useSelector((state:StoreState)=>state.characters);
	const dispatch = useDispatch()
	const [num,setNum] =useState(1);
	
	useEffect(() => {
		dispatch<any>(fetchUsers())
	}, []);

	useEffect(() => {
		dispatch<any>(fetchPage(num))
	}, [num]);

	return (
		<div>
			<button onClick={fetchUsers}>FETCH CHARACTERS!</button>
			{num>1&&<button onClick={()=>setNum(num-1)}>Prev</button>}
			{num<149&&<button onClick={()=>setNum(num+1)}>Next</button>}
		<section className={style.container}>
			{characters?characters.map((e:Character)=>{
			
				return(
						<Link to={`/detail/${e._id}`}>
						<div className={style.card} key={e._id}>
						<h1 key={e._id}>{e.name}</h1>
						<img src={e.imageUrl} alt="" />
						</div>
						</Link>
				) 
			})
			:(<h1>sory</h1>)}
		</section></div>
	);
}

export default Home;

