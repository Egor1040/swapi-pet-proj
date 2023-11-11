import React from 'react';
import '../../common.scss'
import { Header, Main } from '../../layout';

export const BasicStructure = () => {
    return (
        <div className='wrapper'>
            <div className='twinkling'></div>
            <Header/>
            <Main/>
        </div>
    );
};
