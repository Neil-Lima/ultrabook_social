import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import CardPerfil from '../../components/CardPerfil'
import CardTotal from '../../components/CardTotal'
import CardItem from '../../components/CardItem'
import Layout from '../../layout/Layout'

function DetalheEvento() {
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "80px" }}>
                        <Col>
                            <CardPerfil />
                            <CardTotal />
                            <CardItem />
                        </Col>

                        <Col md={6} lg={7} xl={6}>

                            <Card style={{ marginBottom: '10px' }}>
                                <Card>
                                    <Card style={{ width: '168px', textAlign: 'center' }}>
                                        <Card.Body>
                                            <Card.Title style={{ width: '100%', background: 'var(--bs-primary)', color: 'var(--bs-white)' }}>Quarta feira</Card.Title>
                                            <Card.Subtitle className="text-muted card-subtitle mb-2">08 de dezembro</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                    <Card.Img className="card-img w-100 d-block" src="https://2.bp.blogspot.com/-51vAYXaKFUo/WBKRcYTXyoI/AAAAAAAAmpM/WyssGXVjXeEFIYXuCc5vLehCCViXPhVbACLcB/s1600/Madara%2BJutsus%2Bde%2BFogo%2B%2528Katon%2529.jpg" />
                                    <Card.Body>
                                        <Button className="btn btn-primary float-end" type="button" style={{ marginTop: '-93px' }}>Comprar bilhete</Button>
                                        <Card.Title><i className="fas fa-fire" style={{ color: 'var(--bs-red)', marginRight: '10px' }}></i>Academia de Jutsus de fogo.</Card.Title>
                                        <h4 style={{ color: 'rgb(33,37,41)' }}>Descrição do evento:</h4>
                                        <p style={{ color: 'var(--bs-gray)' }}>Para você que é um ninja e tem interesse em aprender grandes jutsus de fogo, esse é o lugar certo, não perca tempo.</p>
                                        <Row style={{ marginTop: '31px' }}>
                                            <Col>
                                                <h5>Horários</h5>
                                                <p><span style={{ color: 'rgb(103, 106, 121)' }}>09:00 - 17:00 </span><br /></p>
                                                <p><span style={{ color: 'rgb(103, 106, 121)' }}>15:00 - 18:00 </span><br /></p>
                                            </Col>
                                            <Col>
                                                <h5>Taxa de entrada</h5>
                                                <p><span style={{ color: 'rgb(103, 106, 121)' }}>Uma tigela de lamén</span><br /></p>
                                            </Col>
                                            <Col>
                                                <h5>Categoria</h5>
                                                <p><span style={{ color: 'rgb(103, 106, 121)' }}>Jutsus, estilos de luta</span><br /></p>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col style={{ padding: '0px', display: 'flex', alignItems: 'center' }}>
                                                <h4>Participantes</h4>
                                                <img className="rounded-circle" src="https://criticalhits.com.br/wp-content/uploads/2020/09/madara-uchiha.jpg" style={{ width: '36px', height: '33.8px' }} alt="Participant" />
                                                <img className="rounded-circle" src="https://criticalhits.com.br/wp-content/uploads/2022/08/9b78c-16547701689323-1920.jpg" style={{ width: '36px', height: '33.8px', marginRight: '0px', marginLeft: '-15px' }} alt="Participant" />
                                                <img className="rounded-circle" src="https://criticalhits.com.br/wp-content/uploads/2022/05/itachi-uchiha-talk-no-jutsu-1200x720-1.jpg" style={{ width: '36px', height: '33.8px', marginRight: '0px', marginLeft: '-13px' }} alt="Participant" />
                                                <img className="rounded-circle" src="https://nerdhits.com.br/wp-content/uploads/2022/08/ino.jpg" style={{ width: '36px', height: '33.8px', marginRight: '0px', marginLeft: '-13px' }} alt="Participant" />
                                                
                                            </Col>
                                            
                                            <Col>
                                                <ListGroup>
                                                    <ListGroup.Item style={{ borderStyle: 'none' }}>
                                                        <i className="fas fa-globe" style={{ color: 'var(--bs-primary)' }}></i>
                                                        <span style={{ marginRight: '7px' }}> Visitantes</span>
                                                        <strong>130</strong>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item style={{ borderStyle: 'none' }}>
                                                        <i className="far fa-check-circle" style={{ color: 'var(--bs-primary)' }}></i>
                                                        <span style={{ marginRight: '7px' }}> Registrados</span>
                                                        <strong>152</strong>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item style={{ borderStyle: 'none' }}>
                                                        <i className="far fa-user" style={{ color: 'var(--bs-primary)' }}></i>
                                                        <span style={{ marginRight: '7px' }}> Visitantes</span>
                                                        <strong>130</strong>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Card>
                            <Row>

                            </Row>

                        </Col>

                        <Col>

                            <h5><i className="far fa-calendar-alt" style={{ color: 'var(--bs-primary)' }}></i> Outros eventos</h5>
                            <ListGroup style={{ marginTop: '19px' }}>
                                <ListGroup.Item style={{ borderStyle: 'none', marginTop: '0px', padding: '20px' }}>
                                    <img className="float-start" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9393745a-254c-4c4a-b032-fd5117bd3bbc/da5hzt6-b81c1091-d97d-4188-a7c7-df167b82afdf.png/v1/fill/w_400,h_520,strp/chapeu_hokage_png_by_ggreuz_da5hzt6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTIwIiwicGF0aCI6IlwvZlwvOTM5Mzc0NWEtMjU0Yy00YzRhLWIwMzItZmQ1MTE3YmQzYmJjXC9kYTVoenQ2LWI4MWMxMDkxLWQ5N2QtNDE4OC1hN2M3LWRmMTY3YjgyYWZkZi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.D_pB4u1hIVja-rLb16Bp-ZF6hi5q37AUQ_UJZuNGAjk" style={{ width: '38px' }} alt="Event" />
                                    <span className="float-start">Como ser um líder</span>
                                    <Button className="btn btn-primary float-end" type="button" style={{ background: 'var(--bs-white)', color: 'var(--bs-primary)', width: '95px' }}>
                                        <i className="fas fa-thumbs-up"></i> Interesse
                                    </Button>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ borderStyle: 'none', marginTop: '0px', padding: '20px' }}>
                                    <i className="far fa-edit float-start" style={{ fontSize: '24px', color: 'var(--bs-primary)' }}></i>
                                    <span className="float-start">Como realizar missões</span>
                                    <Button className="btn btn-primary float-end" type="button">
                                        <i className="far fa-thumbs-up"></i> Entrar
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>

                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default DetalheEvento