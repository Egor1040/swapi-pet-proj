import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdditionalQuestion, BasicStructure, Characters, CharactersDetail, MainMenu } from '../pages';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={ <BasicStructure/> }>
                <Route index element={ <MainMenu/> }/>
                <Route path='/addition-question' element={<AdditionalQuestion/>}/>
                <Route path='/characters' element={ <Characters/> }/>
                <Route path='/characters/:id' element={ <CharactersDetail/> }/>
            </Route>
        </Routes>
    );
};

export default Routers;