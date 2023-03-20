import React from 'react'
import Col_centro from './components/colunas/col_centro/components/Col_centro'
import Col_direita from './components/colunas/col_direita/Col_direita'
import Col_esquerda from './components/colunas/col_esquerda/Col_esquerda'
import Layout from '../../shared/layout/Layout'
function Home() {

  return (
    <>
      <Layout>
        <div className="container">
          <div class="row" style={{ marginTop: "116px" }}>
            <Col_esquerda />
            <Col_centro />
            <Col_direita />
          </div>
        </div>
      </Layout>


    </>
  )
}

export default Home