import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layout/Layout'
import Login from '../pages/login/Login'
import Celebracao from '../pages/celebracao/Celebracao'
import CentroAjuda from '../pages/CentroAjuda/CentroAjuda'
import Eventos from '../pages/eventos/Eventos'
import DetalheEvento from '../pages/detalheEventos/DetalheEvento'
import Notificacoes from '../pages/notificacoes/Notificacoes'
import PostVideo from '../pages/PostVideo/PostVideo'
import Grupos from '../pages/grupos/Grupos'
import Galeria from '../pages/galeria/Galeria'
import Chat from '../pages/chat/Chat'


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/celebracoes" element={<Celebracao />} />
                    <Route path="/centroajuda" element={<CentroAjuda />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/eventosdetalhes" element={<DetalheEvento />} />
                    <Route path="/notificacoes" element={<Notificacoes />} />
                    <Route path="/postvideo" element={<PostVideo />} />
                    <Route path="/grupo" element={<Grupos />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas