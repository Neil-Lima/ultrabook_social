import React from 'react'
import Gallery_perfil from '../col_esquerda/components/gallery_perfil/Gallery_perfil'
import Tab_perfil from '../col_esquerda/components/Tab_perfil/Tab_perfil'
import Experiencias from './components/experiencias/Experiencias'
import Sobre from './components/sobre/Sobre'

function Col_direita() {
  return (
    <>
      <div className="col">
        <Sobre />
        <Experiencias />
        <Gallery_perfil/>
      </div>
    </>
  )
}

export default Col_direita