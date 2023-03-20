import React from 'react'

function Lista_seguidores() {
  return (
    <>
      <ul class="list-group" style={{marginBottom: "20px"}}>
            <li class="list-group-item" style={{borderStyle: "none"}}>
                <span style={{color: "rgba(33,37,41,0.66)"}}>
                    <strong>Seguidores</strong>: <strong>4000</strong>
                </span></li>
            <li class="list-group-item" style={{borderStyle: "none"}}>
                <span style={{color: "rgba(33,37,41,0.71)"}}>
                    <strong>Seguindo</strong>: <strong>820</strong>
                </span>
            </li>
            <li class="list-group-item" style={{borderStyle: "none"}}>
                <span style={{color: "rgba(33,37,41,0.73)"}}>
                    <strong>Postagens</strong>: <strong>100</strong>
                </span>
            </li>
        </ul>
    </>
  )
}

export default Lista_seguidores