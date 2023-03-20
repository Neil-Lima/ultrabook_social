import React from 'react'
import Card_perfil_principal from './components/card_perfil_principal/Card_perfil_principal'
import Tab_perfil from './components/Tab_perfil/Tab_perfil'

function Col_esquerda() {
  return (
    <>
      <div class="col-md-8">
        <Card_perfil_principal />
        <Tab_perfil />
      </div>
    </>
  )
}

export default Col_esquerda