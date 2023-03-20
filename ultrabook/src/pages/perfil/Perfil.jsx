import React from 'react'
import Col_direita from './components/columns/col_direita/Col_direita'
import Col_esquerda from './components/columns/col_esquerda/Col_esquerda'
import Layout from '../../shared/layout/Layout'
function Perfil() {
    return (
        <>
            <Layout>
                <div className="container">
                    <div class="row" style={{ marginTop: "107px" }}>
                        <Col_esquerda />
                        <Col_direita />
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default Perfil