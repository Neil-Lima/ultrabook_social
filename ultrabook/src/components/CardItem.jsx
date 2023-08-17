import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGlobe, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';

const CardItem = () => {
  return (
    <Card>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <FontAwesomeIcon icon={faHome} style={{ color: 'var(--bs-primary)' }} /><span><strong> Home</strong></span>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <FontAwesomeIcon icon={faGlobe} style={{ color: 'var(--bs-success)' }} /><span><strong> Conexões</strong></span>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'var(--bs-pink)' }} /><span><strong> Eventos</strong></span>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderStyle: 'none' }}>
            <FontAwesomeIcon icon={faUsers} style={{ color: 'var(--bs-orange)' }} /><span><strong> Grupos</strong></span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
