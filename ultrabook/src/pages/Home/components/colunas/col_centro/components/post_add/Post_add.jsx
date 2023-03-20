import React from 'react'

function Post_add() {
  return (
   <>
   <div class="card" style={{marginTop: "20px", marginBottom: "15px"}}>
            <div class="card-body" style={{marginBottom: "10px"}}>
                <div class="input-group" style={{marginBottom: "27px"}}>
                    <span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}>
                        <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "50px"}} />
                    </span>
                    <input class="border rounded-pill form-control" placeholder='No que está pensando?' type="text" style={{borderStyle: "none", background: "#e3e9ef", placeholder:"No que está pensando?" }}/>
                </div>
                    <button class="btn btn-primary" type="button" style={{background: "#cdcecf",  color: "var(--bs-gray-800)",  marginRight: "5px", borderStyle: "none", marginBottom: "3px"}}>
                        <i class="far fa-image" style={{color: "var(--bs-success)"}}></i>
                         Foto
                    </button>
                    <button class="btn btn-primary" type="button" style={{background: "#cdcecf",  color: "var(--bs-gray-800)",  marginRight: "5px", borderStyle: "none", marginBottom: "3px"}}>
                        <i class="fas fa-video" style={{color: "var(--bs-blue)"}}></i> 
                        Video
                    </button>
                    <button class="btn btn-primary" type="button" style={{background: "#cdcecf",  color: "var(--bs-gray-800)",  marginRight: "5px", borderStyle: "none", marginBottom: "3px"}}>
                        <i class="far fa-laugh-beam" style={{color: "var(--bs-orange)"}}></i>
                         Atividade
                    </button>
                    <button class="btn btn-primary" type="button" style={{background: "#cdcecf",  color: "var(--bs-gray-800)",  marginRight: "5px", borderStyle: "none", marginBottom: "3px"}}>
                        <i class="far fa-calendar-alt" style={{color: "var(--bs-danger)"}}></i>
                         Evento
                    </button>
            </div>
        </div>
   </>
  )
}

export default Post_add