import React from 'react'

function Lista_opcoes() {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item" style={{ borderStyle: "none" }}>
                            <i class="fas fa-home" style={{ color: "var(--bs-primary)" }}></i>
                            <span><strong> Home</strong></span>
                        </li>
                        <li class="list-group-item" style={{ borderStyle: "none" }}>
                            <i class="fas fa-globe" style={{ color: "var(--bs-success)" }}></i>
                            <span><strong> Conexões</strong></span>
                        </li>
                        <li class="list-group-item" style={{ borderStyle: "none" }}>
                            <i class="far fa-calendar-alt" style={{ color: "var(--bs-pink)" }}></i>
                            <span><strong>Eventos</strong></span>
                        </li>
                        <li class="list-group-item" style={{ borderStyle: "none" }}>
                            <i class="fas fa-users" style={{ color: "var(--bs-orange)" }}></i>
                            <span><strong> Grupos</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Lista_opcoes