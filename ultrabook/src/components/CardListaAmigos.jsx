import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { FaSun, FaMoon, FaThumbsUp } from 'react-icons/fa';

const CardListaAmigos = () => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <Card.Body>
        <Card.Title style={{ color: 'var(--bs-primary)' }}>Pessoas que talvez conheça:</Card.Title>
        <ListGroup>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <img className="float-start" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" style={{ width: '41px' }} alt="Naruto" />
            <span className="float-start" style={{ fontSize: '16px' }}><strong>Naruto</strong></span>
            <Button className="btn-primary float-end" type="button">Adicionar</Button>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <img className="float-start" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" style={{ width: '41px' }} alt="Naruto" />
            <span className="float-start" style={{ fontSize: '16px' }}><strong>Naruto</strong></span>
            <Button className="btn-primary float-end" type="button">Adicionar</Button>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <img className="float-start" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" style={{ width: '41px' }} alt="Naruto" />
            <span className="float-start" style={{ fontSize: '16px' }}><strong>Naruto</strong></span>
            <Button className="btn-primary float-end" type="button" style={{ color: 'var(--bs-primary)', background: 'var(--bs-white)' }}>
              <FaThumbsUp /> Enviado
            </Button>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <img className="float-start" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" style={{ width: '41px' }} alt="Naruto" />
            <span className="float-start" style={{ fontSize: '16px' }}><strong>Naruto</strong></span>
            <Button className="btn-primary float-end" type="button">Adicionar</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardListaAmigos;
