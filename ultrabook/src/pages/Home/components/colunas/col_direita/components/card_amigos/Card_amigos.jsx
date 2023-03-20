import React from 'react'

function Card_amigos() {
    return (
        <>
            <div class="card" style={{marginBottom: "10px"}}>
                <div class="card-body">
                    <h6 class="card-title" style={{color: "var(--bs-primary)"}}>Pessoas que talvez conheça:</h6>
                    <ul class="list-group">
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img class="float-start" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" style={{width: "41px"}} />
                            <span class="float-start" style={{fontSize: "16px"}}>
                                <strong> Naruto Uzumaki</strong>
                                </span>
                            <button class="btn btn-primary float-end" type="button">Adicionar</button>                        
                        </li>                    
                    
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img class="float-start" src="https://sm.ign.com/ign_br/screenshot/3/3o-itachi-/3o-itachi-uchiha_k81j.jpg" style={{width: "41px"}} />
                            <span class="float-start" style={{fontSize: "16px"}}>
                                <strong>Itachi Uchiha</strong>
                                </span>
                            <button class="btn btn-primary float-end" type="button">Adicionar</button>                        
                        </li>  

                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img class="float-start" src="https://criticalhits.com.br/wp-content/uploads/2018/08/sasuke-mangekyo-sharingan-01.jpg" style={{width: "41px"}} />
                            <span class="float-start" style={{fontSize: "16px"}}>
                                <strong>Sasuke Uchiha</strong>
                            </span>
                            <button class="btn btn-primary float-end" type="button" style={{color: "var(--bs-primary)", background: "var(--bs-white)"}}>
                                <i class="fas fa-thumbs-up"></i>
                                Enviado
                            </button>
                        </li>                 
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card_amigos