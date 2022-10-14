import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { emptyDetail, fetchUserId } from '../../actions';
import SearchBar from '../../components/SearchBar';
import { Character } from '../../interfaces';
import { StoreState } from '../../reducer';
import style from '../Details/Detail.module.css'
function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch<any>(fetchUserId(id))
    }, []);

    function handlerBack() {
        dispatch<any>(emptyDetail())
    }
    const character: Character = useSelector((state: StoreState) => state.detail);

    return (
        <div>

        <SearchBar/>
        <div className='d-flex m-3 gap-3'>
            <div className={style.buton}>
                
            <Link to={'/'}>
                    <button onClick={handlerBack}>Back</button>
                </Link>
            </div>

            <div className="card shadow-lg p-5 mb-5 rounded bg-transparent flex-fill">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <img src={character.imageUrl} alt="" />
                </div>
                    <h2>Name: {character.name}</h2>
                    <div><h2>Films:</h2><br />
                        {character.films ? (<>{character.films.map(e => (<li key={e}>{e}.</li>))}</>) : (null)}
                        {character.shortFilms?.map(e => (<li key={e}>{e}.</li>))}
                        {character.tvShows?.map(e => (<li key={e}>{e}.</li>))}
                        {character.videoGames?.map(e => (<li key={e}>{e}.</li>))}</div>
                        <br />
                    <h4>allies:{character.allies?character.allies.map(e => (<li key={e}>{e}</li>)):(<>none</>)}</h4>
                    <h4>enemies:{character.enemies?.map(e => (<li key={e}>{e}</li>))}</h4>
                   
                </div>
               
            </div>
        </div>
        </div>
    )
}

export default Detail;