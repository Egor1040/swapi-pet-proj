import React from 'react';
import '../MainMenu/mainMenu.scss';
import { data } from '../../data/mainMenu';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
    return (
        <div className="main-menu">
            {data.menu.map((item, index) => (
                <Link to={item.path}
                    key={index}
                    className="main-menu__item"
                >
                    <img src={item.imgSrc} alt="" className="main-menu__img" />
                    <p className='main-menu__title'>{item.title}</p>
                </Link>
            ))}
        </div>
    );
};
