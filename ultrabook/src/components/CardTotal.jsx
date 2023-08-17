import React from 'react'
import { ListGroup } from 'react-bootstrap'

function CardTotal() {
  return (
   <>
     <ListGroup style={{ marginBottom: '20px' }}>
        <ListGroup.Item style={{ borderStyle: 'none' }}>
          <span style={{ color: 'rgba(33,37,41,0.66)' }}><strong>Seguidores</strong>: <strong>4000</strong></span>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderStyle: 'none' }}>
          <span style={{ color: 'rgba(33,37,41,0.71)' }}><strong>Seguindo</strong>: <strong>820</strong></span>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderStyle: 'none' }}>
          <span style={{ color: 'rgba(33,37,41,0.73)' }}><strong>Postagens</strong>: <strong>100</strong></span>
        </ListGroup.Item>
      </ListGroup>
   </>
  )
}

export default CardTotal