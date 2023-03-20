import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-light navbar-expand-md fixed-top py-3" style={{background: "var(--bs-white)"}}>
    <div class="container">
        <i class="fas fa-cloud-showers-heavy" style={{fontSize: "34px", marginRight: "20px", color: "var(--bs-primary)"}}></i>
      
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2">
                <span class="visually-hidden">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
        <div id="navcol-2" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">         
                <li class="nav-item">
                    <Link to="/" class="nav-link active" href="#">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/perfil" class="nav-link" href="#">Perfil</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Páginas</a>
                    <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/albuns">Albuns</Link>
                        <a class="dropdown-item" href="celebrações.html">Celebrações</a>
                        <a class="dropdown-item" href="mensagens.html">Mensagens</a>                        
                        <a class="dropdown-item" href="eventos.html">Eventos</a>
                        <a class="dropdown-item" href="detalhesEventos.html">Detalhes eventos</a>
                        <Link class="dropdown-item" to="/grupo">Grupos</Link>
                        <a class="dropdown-item" href="detalhesGrupos.html">Detalhes grupos</a>
                        <a class="dropdown-item" href="postarVideo.html">Postar videos</a>
                        <a class="dropdown-item" href="detalhesPostarVideo.html">Detalhes postar videos</a>
                        <a class="dropdown-item" href="blog.html">Blog</a>
                        <a class="dropdown-item" href="DetalhesBlog.html">Detalhes Blog</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Conta</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Criar uma página</a>
                        <a class="dropdown-item" href="configuracoes.html">Configurações</a>
                        <a class="dropdown-item" href="notificacoes.html">Notificações</a>
                        <a class="dropdown-item" href="centroAjuda.html">Centro de ajuda</a>
                        <a class="dropdown-item" href="detalhesAjuda.html">Detalhes da ajuda</a>
                        <a class="dropdown-item" href="autenticacao.html">Autenticação</a>
                        <a class="dropdown-item" href="privacidadeEtermos.html">Privacidade e termos</a>
                    </div>
                </li>
            </ul><a class="btn btn-primary ms-md-2" role="button" href="#" style={{marginRight: "5px"}}>
                <i class="fas fa-comment-dots"></i>
                </a>
                <a class="btn btn-primary ms-md-2" role="button" href="#" style={{marginRight: "5px"}}>
                    <i class="fas fa-bell"></i>
                </a>
                <a class="btn btn-primary ms-md-2" role="button" href="#" style={{marginRight: "5px"}}>
                    <i class="fas fa-wrench"></i>
                </a>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar