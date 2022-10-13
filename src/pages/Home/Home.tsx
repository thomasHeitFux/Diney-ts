import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {  fetchPage, fetchUsers, numberPage } from '../../actions';
import { StoreState } from '../../reducer';
import style from '../Home/Home.module.css';
import { Character } from '../../interfaces';
import { Link } from 'react-router-dom';
import logo from '../../imgs/dslog.png';
import SearchBar from '../../components/SearchBar';

  function Home() {
	const characters = useSelector((state:StoreState)=>state.characters);
	const page = useSelector((state:StoreState)=>state.page);
	const dispatch = useDispatch()
	const [num,setNum] =useState<number>(page);
	
	useEffect(() => {
		dispatch<any>(fetchUsers())
		dispatch<any>(numberPage(num))
	}, []);

	useEffect(() => {
		dispatch<any>(numberPage(num))
		dispatch<any>(fetchPage(num))
	}, [num]);

	return (
		<div>
			<nav className={style.nav}>
			<SearchBar/>
			</nav>
			<div className={style.buttons}>
			{num>1&&<button onClick={()=>setNum(num-1)}>Prev</button>}
			<h3>{page}</h3>
			{num<149&&<button onClick={()=>setNum(num+1)}>Next</button>}
			</div>
		<section className={style.container}>
			{characters?characters.map((e:Character)=>{
			
				return(
						<Link to={`/detail/${e._id}`} key={e._id} style={{ textDecoration: 'none', color:'black'}}>
						<div className={style.card} key={e._id}>
						<img src={e.imageUrl} alt="" />
						<h1 className={style.name} key={e._id}>{e.name}</h1>
						</div>
						</Link>
				) 
			})
			:(<h1>sory</h1>)}
		</section>
		<div className={style.buttons}>
			{num>1&&<button onClick={()=>setNum(num-1)}>Prev</button>}
			<h3>{page}</h3>
			{num<149&&<button onClick={()=>setNum(num+1)}>Next</button>}
			</div></div>
	);
}

export default Home;

