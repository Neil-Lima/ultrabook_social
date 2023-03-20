import React from 'react'

function Gallery_perfil() {
  return (
   <>
   <div class="card" style={{marginBottom: "10px"}}>
    <div class="card-body">
        <h4 class="card-title"><strong>
            <span style={{color: "var(--bs-card-title-color)"}}>Fotos:</span>
            </strong><br />
        </h4>
        <div class="container">
            <div class="row flex-box flex-wrap-wrap">

                <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                    <a class="fancybox" rel="gallery1" title="Hero Image Nature" href="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/03/rosto-do-kakashi-saiba-como-foi-a-revelacao-para-os-fas-da-serie-960x718.png">
                        <img class="img-fluid" src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/03/rosto-do-kakashi-saiba-como-foi-a-revelacao-para-os-fas-da-serie-960x718.png" />
                    </a>
                </div>
            
            </div>
       
        </div>
    </div>
</div>
   </>
  )
}

export default Gallery_perfil