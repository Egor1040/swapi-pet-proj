import React, { useState } from 'react';
import './characters.scss';
import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import { LoaderSpiner, Paginations } from '../../components';

export const Characters = () => {
    const [link, setLink] = useState('https://swapi.dev/api/people');
    const { res } = useFetch(link);

    if (!res) {
        return (
            <LoaderSpiner></LoaderSpiner>
        )
    } else {
        return (
            <div className='menu-second'>
                <div className="link">
                    <div className='link-items'>
                        <Link to="/" className='link-items__home'>Home</Link>
                        <span>/</span>
                        <span className='link-items__now'>Characters</span>
                    </div>

                    <Paginations res={res} setLink={setLink}/>
                </div>

                <div className="menu-content">
                    {res.results.map((el, index) => (
                        <Link to={`/characters/${el.url.slice(-3, -1).replace(/\//g, '')}`} key={index}>
                            <div className='menu-content__item'
                                key={index}
                                data={index}
                            >
                                <div className="menu-content__img">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${/^\d{1}$/.test(el.url.slice(-2)) ? el.url.slice(-2) : el.url.slice(-3, -1)}.jpg`} alt="characters" />
                                </div>
                                <div className="menu-content__name">{el.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
};