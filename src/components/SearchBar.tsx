import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchChar } from '../actions';
import { StoreState } from '../reducer';
import logo from '../imgs/dslog.png'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setname] = useState("");

    function handleSubmit(e:any) {
        e.preventDefault();
        console.log("se manda");
        console.log(name);
        dispatch<any>(searchChar(name))
    }

    function handleInputChange(e: any) {
        e.preventDefault();
        setname(e.target.value)
    };

    return (
        <nav>
            <img src={logo} alt="" height={100} />
            <form onSubmit={e=>handleSubmit(e)}>
                <input  onChange={e => handleInputChange(e)} type="text" placeholder='Search...' />
                <button onClick={e=>handleSubmit(e)} type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar;