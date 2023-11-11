import React from 'react';
import './header.scss';

export const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-help">?</div>
                <div className="header-logo">
                    <span className='header-logo__main'>star</span>
                    <span className='header-logo__medium'>A VISUAL GUIDE</span>
                    <span className='header-logo__main'>wars</span>
                </div>
            </div>
        </div>
    );
};
