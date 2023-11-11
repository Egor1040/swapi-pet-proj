import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BasicStructure, MainMenu } from '../pages';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={ <BasicStructure/> }>
                <Route index element={ <MainMenu/> }/>
            </Route>
        </Routes>
    );
};

export default Routers;