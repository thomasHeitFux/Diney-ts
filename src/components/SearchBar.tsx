import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchChar } from '../actions';
import logo from '../imgs/dslog.png'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setname] = useState("");

    function handleSubmit(e: any) {
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
        <nav className='bg-info d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap shadow-lg  mb-5  rounded'>
            <img className='p-2' src={logo} alt="" height={100} />
            <form className='p-2' onSubmit={e => handleSubmit(e)}>
                <div className="input-group ">
                    <input onChange={e => handleInputChange(e)} type="text" className="form-control" placeholder='Search...' aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={e => handleSubmit(e)} className="btn btn-outline-dark" type="submit" id="button-addon2">Search</button>
                </div>
            </form>
        </nav>
    )
}

export default SearchBar;