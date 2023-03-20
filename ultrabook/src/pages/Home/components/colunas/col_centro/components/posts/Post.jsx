import React from 'react'

function Post({children}) {
  return (
   <>
   <div class="card" style={{marginBottom: "15px"}}>
    <div class="card-body" style={{marginBottom: "10px"}}>
        <h4 class="card-title">
            <img src="https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/12/sakura-1024x683.webp" style={{width: "77px"}} /> 
            Sakura Haruno
        </h4>
        <p>Adicionou um nova foto</p>
        <p class="card-text">
        <strong>
          <span style={{color: "rgb(58, 58, 58)", backgroundColor: "rgb(255, 254, 254)"}}>Time 7- composto por: Kakashi Hatake, Sakura haruno, Sasuke Uchiha, Naruto Uzumaki!</span>
        </strong>       
        </p>
        <img style={{width: "100%"}} src="https://sm.ign.com/t/ign_br/screenshot/default/naruto-time-7_jek6.h720.jpg" />
    </div>
    {children}
</div>

   </>
  )
}

export default Post