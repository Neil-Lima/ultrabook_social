import React from 'react'
import Card_amigos from './components/card_amigos/Card_amigos'
import Card_noticias from './components/card_noticias/Card_noticias'

function Col_direita() {
    return (
        <>
            <div class="col">
                <Card_amigos />
                <Card_noticias />
            </div>

        </>
    )
}

export default Col_direita