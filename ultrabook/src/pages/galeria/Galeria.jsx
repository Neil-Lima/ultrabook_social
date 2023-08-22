import React, { useState } from 'react';
import { Col, Card, ListGroup, Row, Container, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaleria, faGlobe, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import CardPost from '../../components/CardPost';
import CardStories from '../../components/CardStories';
import CardListaAmigos from '../../components/CardListaAmigos';
import CardBlog from '../../components/CardBlog';
import CardAddPost from '../../components/CardAddPost';
import Layout from '../../layout/Layout';
import Lightbox from 'react-image-lightbox';
import { FaArrowLeft, FaArrowRight, FaCamera, FaTimes } from 'react-icons/fa';

const Galeria = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
    setSelectedIndex(0);
  };

  const navigateToImage = (direction) => {
    let newIndex = selectedIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setSelectedImage(images[newIndex]);
    setSelectedIndex(newIndex);
  };

  const images = [
    'https://oxentesensei.com.br/wp-content/uploads/2023/01/Kakashi-Naruto-Quarta-Grande-Guerra-Ninja-capa.jpg',
    'https://i0.wp.com/narutokonoha.com/wp-content/uploads/2019/11/Qual-%C3%A9-o-cl%C3%A3-do-Kakashi.jpg?fit=810%2C445&ssl=1',
    'https://criticalhits.com.br/wp-content/uploads/2022/02/Screenshot-2022-02-25-at-00-58-27-kakashi-hatake-3-1200x900.jpg-JPEG-Image-1200-%C3%97-900-pixels-910x683.png',
    'https://thenewsfetcher.com/wp-content/uploads/2021/01/kakashi-hatake-naruto-mask.jpg',
    'https://criticalhits.com.br/wp-content/uploads/2021/08/Hatake.Kakashi.full_.408254.jpg'
  ];



  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <CardPerfil />
            <CardTotal />
            <CardItem />
          </Col>

          <Col md={6} lg={7} xl={6}>
            <Container style={{ borderColor: 'var(--bs-secondary)' }}>
              <Card>
                <Card.Body>
                  <Card style={{ width: '222px', borderStyle: 'none' }}>
                    <Card.Body style={{ textAlign: 'center', borderStyle: 'dashed', borderColor: 'var(--bs-gray-500)' }}>
                      <h4 className="card-title">Selecione uma foto</h4>
                      <FaCamera style={{ fontSize: '86px', color: 'var(--bs-primary)' }} />
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
              <Row className="flex-box flex-wrap-wrap">
                {images.map((image, index) => (
                  <Col key={index} sm={4} className="flex-box flex-justify-center flex-align-center">
                    <a
                      onClick={() => openModal(image, index)}
                      role="button"
                      title={`Hero Image ${index}`}
                      href="#"
                    >
                      <img className="img-fluid" src={image} alt={`Hero Image ${index}`} />
                    </a>
                  </Col>
                ))}
              </Row>
              <Modal show={showModal} onHide={closeModal} size="xl" centered>
                <Modal.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Button variant="link" onClick={() => navigateToImage(-1)}>
                      <FaArrowLeft />
                    </Button>
                    <Button variant="link" onClick={() => closeModal()}>
                      <FaTimes />
                    </Button>
                    <Button variant="link" onClick={() => navigateToImage(1)}>
                      <FaArrowRight />
                    </Button>
                  </div>
                  <img className="img-fluid" src={selectedImage} alt="Selected" />
                </Modal.Body>
              </Modal>
            </Container>
          </Col>

          <Col>

          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Galeria;
