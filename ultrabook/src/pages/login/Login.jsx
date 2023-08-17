import React, { useState } from 'react';
import { Col, Card, Form, Button, Row, Modal } from 'react-bootstrap';
import { RiLoginBoxLine } from 'react-icons/ri';
import Cadastro from './components/Cadastro';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Row style={{ marginTop: "80px" }}>
        <Col>
        </Col>
        <Col md={6} xl={4}>
          <Card className="mb-5">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                <RiLoginBoxLine size={32} color="white" />
              </div>
              <Form className="text-center" method="post">
                <Form.Group className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" name="password" placeholder="Senha" />
                </Form.Group>
                <Button className="btn btn-primary d-block w-100" type="submit">
                  Login
                </Button>
                <p className="text-muted">Esqueceu a senha?</p>
              </Form>
              <Button className="btn btn-primary" onClick={handleModalShow} type="button">
                Faça seu cadastro
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        </Col>
      </Row>
      
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cadastro />
        </Modal.Body>       
      </Modal>
    </>
  );
}

export default Login;
