import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BasicStructure, Characters, CharactersDetail, MainMenu } from '../pages';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={ <BasicStructure/> }>
                <Route index element={ <MainMenu/> }/>
                <Route path='/characters' element={ <Characters/> }/>
                <Route path='/characters/:id' element={ <CharactersDetail/> }/>
            </Route>
        </Routes>
    );
};

export default Routers;