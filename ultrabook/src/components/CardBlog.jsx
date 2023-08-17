import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CardBlog = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ color: 'var(--bs-primary)' }}>Últimas notícias</Card.Title>
        <ListGroup>
          <ListGroup.Item>
            <h6 style={{ color: 'rgb(33,37,41)' }}>Madara ou Kaguya: qual mais forte?</h6>
            <h6 style={{ color: 'rgba(33,37,41,0.58)' }}>2h</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6 style={{ color: 'rgb(33,37,41)' }}>Madara ou Kaguya: qual mais forte?</h6>
            <h6 style={{ color: 'rgba(33,37,41,0.58)' }}>2h</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6 style={{ color: 'rgb(33,37,41)' }}>Madara ou Kaguya: qual mais forte?</h6>
            <h6 style={{ color: 'rgba(33,37,41,0.58)' }}>2h</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6 style={{ color: 'rgb(33,37,41)' }}>Madara ou Kaguya: qual mais forte?</h6>
            <h6 style={{ color: 'rgba(33,37,41,0.58)' }}>2h</h6>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardBlog;
