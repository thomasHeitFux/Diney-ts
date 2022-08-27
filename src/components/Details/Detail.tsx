import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchUserId } from '../../actions';
import { Character } from '../../interfaces';
import { StoreState } from '../../reducer';
import style from '../Details/Detail.module.css'

function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch<any>(fetchUserId(id))
    }, []);

    const character: Character = useSelector((state: StoreState) => state.detail);

    return (
        <div className={style.colorOne}>
            <div className={style.buton}>
            <Link to={'/'}>
                <button>Back</button>
            </Link>
            </div>

            <div className={style.blur}>
               <div>
               <h3>name: {character.name}</h3>
                <img src={character.imageUrl} alt="" />
               </div>
                <div>
                {character.films ? (<h3>films:{character.films.map(e => (<li key={e}>{e}</li>))}</h3>) : (null)}
                <h3>shortFilms: {character.shortFilms?.map(e => (<li key={e}>{e}</li>))}</h3>
                <h3>tvShows: {character.tvShows?.map(e => (<li key={e}>{e}</li>))}</h3>
                <h3>videoGames:{character.videoGames?.map(e => (<li key={e}>{e}</li>))}</h3>
                <h3>allies:{character.allies?.map(e => (<li key={e}>{e}</li>))}</h3>
                <h3>enemies:{character.enemies?.map(e => (<li key={e}>{e}</li>))}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail;