import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import DC from '../pages/DC'
import Heroe from '../pages/Heroe'
import Marvel from '../pages/Marvel'
import Search from '../pages/Search'

export const PrivateRouters = () => {
    return (
        <>
        <NavBar/>
        <div className='container mt-3'>
            <Routes>
                <Route path="/Marvel" element={<Marvel/>}/>
                <Route path="/dc" element={<DC/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/heroe" element={<Heroe/>}/>
                <Route path="*" element={
                    <main className='p-5'>
                        <p>Not Found</p>
                    </main>
                }/>
            </Routes>
            
            
        </div>
        </>
        
      
    )
}
