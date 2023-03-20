import React from 'react'

function Card_perfil() {
  return (
    <>
      <div class="card" style={{marginBottom: "20px"}}>
            <img class="card-img-top w-100 d-block" src="https://nerdhits.com.br/wp-content/uploads/2020/05/konoha.jpg" />
            <div class="card-body" style={{textAlign: "center"}}>
                <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "126px", marginTop: "-55px"}} />
                <h4 class="card-title">Kakashi Hatake</h4>
                <p style={{color: "rgba(33,37,41,0.76)"}}>Lider da ambu, guerreiro do sharingan, sexto hokage</p>
            </div>
        </div>
    </>
  )
}

export default Card_perfil