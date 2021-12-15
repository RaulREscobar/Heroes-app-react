import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login';
import { PrivateRouters } from './PrivateRouters';

export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<PrivateRouters/>} />
            </Routes>
        </BrowserRouter>
    )
}
