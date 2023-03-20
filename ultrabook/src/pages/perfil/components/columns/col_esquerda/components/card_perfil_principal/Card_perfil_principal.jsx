import React from 'react'

function Card_perfil_principal() {
  return (
   <>
   <div class="card" style={{marginBottom: "10px", textAlign: "center"}}>
    <img class="card-img-top w-100 d-block" src="https://nerdhits.com.br/wp-content/uploads/2020/05/konoha.jpg" style={{height: "197.7px"}} />
            <div class="card-body">
                <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "140px", marginBottom: "10px", marginTop: "-56px", border: "8px solid var(--bs-white);"}} />
                <h4 class="card-title">Kakashi Hatake</h4>
                <h6>270 conexões</h6>
                <p class="card-text">Lider da anbu, guerreiro do sharingan, Sexto Hokage</p>
                <button class="btn btn-primary" type="button">Editar Perfil</button>
            </div>
        </div>
   </>
  )
}

export default Card_perfil_principal