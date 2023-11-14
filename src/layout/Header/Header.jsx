import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <Link to='/addition-question' className="header-help">?</Link>
                <div className="header-logo">
                    <Link to='/' className='header-logo__container'>
                        <span className='header-logo__main'>star</span>
                        <span className='header-logo__medium'>A VISUAL GUIDE</span>
                        <span className='header-logo__main'>wars</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
