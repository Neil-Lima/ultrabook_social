import React from 'react'
import Layout_seg from '../../shared/layout/layout2/Layout_seg'

function Celebracoes() {
    return (
        <>
            <Layout_seg>
                <div class="col">
                    <h3>Aniversariantes</h3>
                    <ul class="list-group">
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <h5>Sakura Haruno<i class="fas fa-birthday-cake" style={{marginLeft: "7px", fontsSize: "32px", color:  "var(--bs-pink)"}}></i></h5>
                            <div class="input-group"><span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}><img src="https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/12/sakura-1280x720.webp" style={{width: "70px"}} /></span><input class="border rounded-pill form-control" type="text" style={{background: "#efefef"}} placeholder="Feliz aniversário querida" /></div>
                        </li>
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <h5>Sasori<i class="fas fa-birthday-cake" style={{marginLeft: "7px", fontsSize: "32px", color: "var(--bs-primary)"}}></i></h5>
                            <div class="input-group"><span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}><img src="https://sm.ign.com/ign_br/screenshot/default/sasoris-face_s9nr.jpg" style={{width: "70px"}} /></span><input class="border rounded-pill form-control" type="text" style={{background: "#efefef"}} placeholder="Feliz aniversário querido" /></div>
                        </li>
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <h5>Yamato<i class="fas fa-birthday-cake" style={{marginLeft: "7px", fontsSize: "32px", color: "var(--bs-primary)"}}></i></h5>
                            <div class="input-group"><span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}><img src="https://criticalhits.com.br/wp-content/uploads/2021/11/A_Marca_na_M3Fo_de_Yamato.png" style={{width: "70px"}} /></span><input class="border rounded-pill form-control" type="text" style={{background: "#efefef"}} placeholder="Feliz aniversário querido" /></div>
                        </li>
                    </ul>
                </div>

            </Layout_seg>
        </>
    )
}

export default Celebracoes