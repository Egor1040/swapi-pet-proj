import './charactersDetail.scss';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LoaderSpiner } from '../../components';

export const CharactersDetail = () => {
    const { id } = useParams();
    let result = parseInt(id);
    const [starData, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${result}`)
            .then(res => res.json())
            .then(res => setData(res))
            .then(res => setLoading(!loading))
    }, [])

    return (
        <>
            {
                loading
                    ?
                    <LoaderSpiner></LoaderSpiner>
                    :
                    <div>
                        <div className='menu-link'>
                            <Link to="/" className='menu-link__characters'>Home</Link>
                            <span>/</span>
                            <Link to="/characters" className='menu-link__characters'>Characters</Link>
                            <span>/</span>
                            <span className='menu-link__characters menu-link__characters_person-name'>{starData.name}</span>
                        </div>

                        <div className='menu-detail'>
                            <div className="menu-detail__img">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${result}.jpg`} alt="" />
                            </div>
                            <div className='menu-detail__descr'>
                                <h2 className="menu-detail__title">{ starData.name}</h2>
                                <ul className='menu-detail__info'>
                                    <li>Birth Year: {starData.birth_year}</li>
                                    <li>Species: {starData.species}</li>
                                    <li>Height: {starData.height}</li>
                                    <li>Mass: {starData.mass}</li>
                                    <li>Gender: {starData.gender}</li>
                                    <li>Hair Color: {starData.hair_color}</li>
                                    <li>Skin Color: {starData.skin_color}</li>
                                    <li>Homeworld: {starData.homeworld}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

            }
        </>
    );
};
