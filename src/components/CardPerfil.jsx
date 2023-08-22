import React from 'react';
import { Card } from 'react-bootstrap';

function CardPerfil() {
    return (
        <Card style={{ marginBottom: '20px', borderStyle: 'none' }}>
            <Card.Img variant="top" src="https://nerdhits.com.br/wp-content/uploads/2020/05/konoha.jpg" />
            <Card.Body style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" alt="Kakashi" style={{ width: '126px', marginTop: '-55px', background: "url('https://cdn.bootstrapstudio.io/placeholders/1400x800.png')" }} />
                <h4 className="card-title">Kakashi Hatake</h4>
                <p style={{ color: 'rgba(33,37,41,0.76)' }}>Lider da ambu, guerreiro do sharingan, sexto hokage</p>
            </Card.Body>
        </Card>
    )
}

export default CardPerfil;
