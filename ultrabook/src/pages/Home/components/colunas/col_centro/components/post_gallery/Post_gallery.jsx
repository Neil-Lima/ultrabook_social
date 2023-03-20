import React from 'react'

function Post_gallery() {
  return (
    <>
    <div class="card" style={{marginBottom: "15px"}}>
            <div class="card-body" style={{marginBottom: "10px"}}>
                <h4 class="card-title">
                    <img src="https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-9-850x560.png" style={{width: "77px"}} /> 
                    Hashirama Senju
                </h4>
                <p>Adicionou um 6 novas fotos</p>
                <div class="container">
                    <div class="row flex-box flex-wrap-wrap">
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Nature" href="hero-background-nature.jpg">
                                <img class="img-fluid" src="hero-background-nature.jpg" />
                            </a>
                        </div>
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Technology" href="hero-background-technology.jpg">
                                <img class="img-fluid" src="hero-background-technology.jpg" />
                            </a>
                        </div>
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Travel" href="hero-background-travel.jpg">
                                <img class="img-fluid" src="hero-background-travel.jpg" />
                            </a>
                        </div>
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Food" href="hero-background-food.jpg">
                                <img class="img-fluid" src="hero-background-food.jpg" />
                            </a>
                        </div>
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Music" href="hero-background-music.jpg">
                                <img class="img-fluid" src="hero-background-music.jpg" />
                            </a>
                        </div>
                        <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                            <a class="fancybox" rel="gallery1" title="Hero Image Photography" href="hero-background-photography.jpg">
                                <img class="img-fluid" src="hero-background-photography.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="input-group" style={{margin: "8px", marginBottom: "33px", marginTop: "32px"}}>
                    <span class="input-group-text" style={{background: "rgba(233,236,239,0)", borderStyle: "none"}}>
                        <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "50px"}} />
                     </span>
                    <input class="border rounded-pill form-control" type="text" style={{borderStyle: "none", background: "#e3e9ef"}} placeholder="Adicionar um comentário" />
                </div>
                <div class="container" style={{marginTop: "0px"}}>
                    <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{width: "70px"}} />
                    <h6>Kakashi Hatake</h6>
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text" style={{padding: "10px", background: "#e0e8f1"}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                            <span style={{color: "var(--bs-primary)", marginRight: "18px"}}>
                                <i class="fas fa-thumbs-up" style={{marginRight: "5px", color: "var(--bs-primary)"}}></i>
                                Curtidas(56)
                            </span>
                             <span style={{color: "var(--bs-primary)", marginrRight: "5px"}}>
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
            </div>
        </div>
    </>
  )
}

export default Post_gallery