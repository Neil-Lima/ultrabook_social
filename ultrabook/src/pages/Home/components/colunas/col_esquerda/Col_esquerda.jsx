import React from 'react'
import Card_perfil from './components/card_perfil/Card_perfil'
import Lista_seguidores from './components/lista_seguidores/Lista_seguidores'
import Locais from './components/locais/Locais'

function Col_esquerda() {
    return (
        <>
            <div class="col">
                <Card_perfil />
                <Lista_seguidores />
                <Locais />
            </div>
        </>
    )
}

export default Col_esquerda