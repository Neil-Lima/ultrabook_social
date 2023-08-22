import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../../layout/Layout';

const Chat = () => {
  return (
    <Layout>
    <Container style={{marginTop:"80px", backgroundColor:'white'}}>
      <Row style={{ marginTop: '10px' }}>
        <Col md={5} xxl={3} style={{ border: '1px solid var(--bs-gray-400)' }}>
          <h4 style={{ textAlign: 'left', marginLeft: '10px', marginBottom: '35px', marginTop: '10px' }}>
            <i className="far fa-edit float-end" style={{ margin: '5px', color: 'var(--bs-blue)' }}></i>
            Bate-Papo Ativos <span className="badge bg-primary">4</span>
          </h4>
          <hr />
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <input
              className="border rounded-pill form-control"
              type="text"
              style={{ height: '38px', background: '#ebebeb', borderStyle: 'none' }}
              placeholder="Pesquisar Bate-papos...."
            />
            <button className="btn btn-primary" type="button" style={{ background: 'var(--bs-white)', borderStyle: 'none' }}>
              <i className="fas fa-search" style={{ color: 'var(--bs-blue)', fontSize: '27px' }}></i>
            </button>
          </div>
          <ul className="list-group" style={{ marginBottom: '10px' }}>
            <li className="list-group-item" style={{ borderStyle: 'none', background: 'var(--bs-blue)', color: 'var(--bs-white)' }}>
              <img
                className="rounded-circle"
                src="https://nerdhits.com.br/wp-content/uploads/2023/02/madara-1-768x402.jpg"
                style={{ width: '69px', margin: '5px', height: '54px' }}
                alt="User"
              />
              <span style={{ fontSize: '22px' }}>
                <strong>Madara Uchiha</strong>
              </span>
              <p>Enviou uma nova foto para você</p>
              <hr />
            </li>
            <li className="list-group-item" style={{ borderStyle: 'none' }}>
              <img
                className="rounded-circle"
                src="https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-9-850x560.png"
                style={{ width: '69px', margin: '5px', height: '54px' }}
                alt="User"
              />
              <span style={{ fontSize: '22px' }}>
                <strong>Hashirama</strong>
              </span>
              <p>Enviou uma nova foto para você</p>
              <hr />
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="list-unstyled">
            {/* Card 1 */}
            <li className="my-2">
              <Card border="border-muted" style={{ width: '65%', borderTopLeftRadius: '0px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', background: 'rgba(52,58,64,0.05)' }}>
                <Card.Body className="text-center p-2">
                  <p className="text-start card-text" style={{ fontSize: '1rem' }}>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
                    metus.
                  </p>
                </Card.Body>
              </Card>
            </li>
            {/* Card 2 */}
            <li className="d-flex justify-content-end my-2">
              <Card border="border-muted" style={{ width: '65%', borderTopLeftRadius: '20px', borderTopRightRadius: '0px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', background: 'rgba(52,58,64,0.05)' }}>
                <Card.Body className="text-center p-2">
                  <img
                    className="img-fluid mb-2"
                    src="https://criticalhits.com.br/wp-content/uploads/2022/05/Madara_Uchiha_Edo.webp"
                    style={{ maxHeight: '30rem', height: 'auto', minHeight: '10rem' }}
                    alt="Content"
                  />
                  <p className="text-start card-text" style={{ fontSize: '1rem' }}>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
                    metus.
                  </p>
                </Card.Body>
              </Card>
            </li>                       
          </ul>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default Chat;
