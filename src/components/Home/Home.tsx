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
	const [num,setNum] =useState<number>(1);
	
	useEffect(() => {
		dispatch<any>(fetchUsers())
	}, []);

	useEffect(() => {
		dispatch<any>(fetchPage(num))
	}, [num]);

	return (
		<div>
			<nav>
				<img src="https://assets.stickpng.com/images/58428d79a6515b1e0ad75ab2.png" alt="" height={100} />
			</nav>
			<div className={style.buttons}>
			{num>1&&<button onClick={()=>setNum(num-1)}>Prev</button>}
			{num<149&&<button onClick={()=>setNum(num+1)}>Next</button>}
			</div>
		<section className={style.container}>
			{characters?characters.map((e:Character)=>{
			
				return(
						<Link to={`/detail/${e._id}`} key={e._id} style={{ textDecoration: 'none', color:'black'}}>
						<div className={style.card} key={e._id}>
						<h1 key={e._id}>{e.name}</h1>
						<img src={e.imageUrl} alt="" />
						</div>
						</Link>
				) 
			})
			:(<h1>sory</h1>)}
		</section>
		<div className={style.buttons}>
			{num>1&&<button onClick={()=>setNum(num-1)}>Prev</button>}
			{num<149&&<button onClick={()=>setNum(num+1)}>Next</button>}
			</div></div>
	);
}

export default Home;

