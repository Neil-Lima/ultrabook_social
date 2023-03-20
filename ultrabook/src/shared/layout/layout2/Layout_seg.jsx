import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Lista_seguidores from './components/lista_seguidores/Lista_seguidores'
import Card_perfil from './components/card_perfil/Card_perfil'
import Lista_opcoes from './components/Lista_opcoes/Lista_opcoes'

function Layout_seg({ children }) {

  return (
    <>
      <Navbar />
      <div class="container" style={{ marginTop: "116px" }}>
        <div class="row">
          <div class="col-md-3 col-xxl-3">
            <Card_perfil />
            <Lista_seguidores />
            <Lista_opcoes />
          </div>
          <div class="col-md-9">
            {children}
          </div>
        </div>
      </div>
    </>

  )
}

export default Layout_seg