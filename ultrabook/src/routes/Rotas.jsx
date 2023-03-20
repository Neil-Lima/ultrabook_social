import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Perfil from '../pages/perfil/Perfil'
import Albuns from '../pages/albuns/Albuns'
import Grupo from '../pages/grupos/Grupo'
import Eventos from '../pages/eventos/Eventos'
import Celebracoes from '../pages/celebracoes/Celebracoes'


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/celebracoes" element={<Celebracoes />} />
                    <Route path="/albuns" element={<Albuns />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/grupo" element={<Grupo />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas