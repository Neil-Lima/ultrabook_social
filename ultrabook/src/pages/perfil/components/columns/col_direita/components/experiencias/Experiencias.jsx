import React from 'react'

function Experiencias() {
    return (
        <>
            <div class="card" style={{marginBottom: "10px"}}>
                <div class="card-body">
                    <h4 class="card-title">
                        <strong>
                    <span style={{color: "var(--bs-card-title-color)"}}>Experiência:</span>
                    </strong><br />
                    </h4>
                    <ul class="list-group">
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img src="https://1.bp.blogspot.com/-SPwt1jGW5O0/VbmIi7J7PDI/AAAAAAAABE8/3GdHqx396vQ/s280/Vila%2BOculta%2Bda%2BN%25C3%25A9voa.png" style={{width: "31px"}} />
                            <span> Aldeia da névoa</span>
                        </li>
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img src="https://i.pinimg.com/originals/3a/b1/9c/3ab19c0e5f1742d7885ceff6cc6bc420.png" style={{width: "31px"}} />
                            <span>Batalha ponte kanabi</span>
                        </li>
                        <li class="list-group-item" style={{borderStyle: "none"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Rinne-Sharingan.png" style={{width: "31px"}} />
                            <span> Guerra ninja</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Experiencias