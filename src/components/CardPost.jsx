import React from 'react';
import { Card, Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';

function CardPost() {
  return (
    <Card style={{ marginBottom: '15px' }}>
      <Card.Body style={{ marginBottom: '10px' }}>
        <h4 className="card-title">
          <img src="https://i.pinimg.com/originals/0a/25/0c/0a250c8816e7118e07e869ae51c54cc0.jpg" style={{ width: '77px' }} alt="Akatsuki Logo" /> Akatsuki
        </h4>
        <p>Adicionou uma nova foto</p>
        <p className="card-text">
          <strong>Akatsuki</strong> (暁; literalmente significa: "Amanhecer") foi, inicialmente, uma organização criada por <a href="https://naruto.fandom.com/pt-br/wiki/Yahiko" style={{ color: 'var(--theme-link-color)', backgroundColor: 'rgb(255, 254, 254)' }}>Yahiko</a> e seus dois companheiros, <a href="https://naruto.fandom.com/pt-br/wiki/Konan" style={{ color: 'var(--theme-link-color)', backgroundColor: 'rgb(255, 254, 254)' }}>Konan</a> e <a href="https://naruto.fandom.com/pt-br/wiki/Nagato" style={{ color: 'var(--theme-link-color)', backgroundColor: 'rgb(255, 254, 254)' }}>Nagato</a>, em um esforço para lutar contra a tirania e a opressão que sua aldeia natal, <a href="https://naruto.fandom.com/pt-br/wiki/Amegakure" style={{ color: 'var(--theme-link-color)', backgroundColor: 'rgb(255, 254, 254)' }}>Amegakure</a>, estava enfrentando durante a <a href="https://naruto.fandom.com/pt-br/wiki/Terceira_Guerra_Mundial_Shinobi" style={{ color: 'var(--theme-link-color)', backgroundColor: 'rgb(255, 254, 254)' }}>Terceira Guerra Mundial Shinobi</a>, além da ambição de conquistar a paz mundial.
        </p>
        <img src="https://s.aficionados.com.br/imagens/akatsuki-todos-membros-historia-poderes_t.jpg" style={{ width: '100%' }} alt="Akatsuki Members" />
        <InputGroup style={{ margin: '8px', marginBottom: '33px', marginTop: '32px' }}>
          <InputGroup.Text style={{ background: 'rgba(233,236,239,0)', borderStyle: 'none' }}>
            <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{ width: '50px' }} alt="User Avatar" />
          </InputGroup.Text>
          <FormControl className="border rounded-pill" type="text" style={{ borderStyle: 'none', background: '#e3e9ef' }} placeholder="Adicionar um comentário" />
        </InputGroup>
        <Container style={{ marginTop: '0px' }}>
          <Row>
            <Col xs={2}>
              <img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" style={{ width: '70px' }} alt="User Avatar" />
            </Col>
            <Col xs={10}>
              <h5>Kakashi Hatake</h5>
              <Card>
                <Card.Body>
                  <p className="card-text" style={{ padding: '10px', background: '#e0e8f1' }}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  <span style={{ color: 'var(--bs-primary)', marginRight: '18px' }}>
                    <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px', color: 'var(--bs-primary)' }} /> Curtidas(56)
                  </span>
                  <span style={{ color: 'var(--bs-primary)', marginRight: '5px' }}>
                    <FontAwesomeIcon icon={faComment} style={{ marginRight: '5px', color: 'var(--bs-primary)' }} /> Comentários
                  </span>
                  <span className="float-end" style={{ color: 'var(--bs-primary)', marginRight: '5px' }}>
                    <FontAwesomeIcon icon={faShareAlt} style={{ marginRight: '5px', color: 'var(--bs-primary)' }} /> Compartilhamentos(46)
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
