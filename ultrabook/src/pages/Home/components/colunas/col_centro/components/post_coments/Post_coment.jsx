import React from 'react'

function Post_coment() {
  return (
    <>
   
        <div class="container" style={{marginTop: "0px"}}>
        <div class="input-group" style={{marginBottom: "27px"}}>
     <span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}>
        <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "50px"}} />
           </span>
        <input class="border rounded-pill form-control" placeholder='Escreva um comentário...' type="text" style={{borderStyle: "none", background: "#e3e9ef", placeholder:"No que está pensando?" }}/>
    </div>
    
            <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "70px"}} />
            <h6>Kakashi Hatake</h6>
            <div class="card">
                <div class="card-body">
                    <p class="card-text" style={{padding: "10px", background: "#e0e8f1"}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    <span style={{color: "var(--bs-primary)", marginRight: "18px"}}>
                        <i class="fas fa-thumbs-up" style={{marginRight: "5px", color: "var(--bs-primary)"}}>
                            </i>Curtidas(56)
                        </span>
                        <span style={{color: "var(--bs-primary)", marginRight: "5px"}}>
                            <i class="fas fa-comment" style={{marginRight: "5px", color: "var(--bs-primary)"}}></i>
                            Curtidas(56)
                        </span>
                        <span class="float-end" style={{color: "var(--bs-primary)", marginRight: "5px"}}>
                            <i class="fas fa-share-alt" style={{marginRight: "5px", color: "var(--bs-primary)"}}></i>
                            Compartilhamentos(56)
                        </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post_coment