import React from 'react'
import Layout from '../../layout/Layout'
import { Button, Col, Container, Image, Row, ListGroup } from 'react-bootstrap'
import CardPerfil from '../../components/CardPerfil'
import CardTotal from '../../components/CardTotal'
import CardItem from '../../components/CardItem'
import { Flex, Text } from '@chakra-ui/react'

function Notificacoes() {
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
                            <Container>
                                <ListGroup style={{ borderStyle: 'none' }}>
                                    <ListGroup.Item style={{ borderStyle: 'none', background: '#defcf3', margin: 0, marginBottom: '5px' }}>
                                        <Image className="float-start" src="https://pm1.narvii.com/6742/18b609188b73a889f18a4247775fccc6114a50fdv2_00.jpg" style={{ width: '80px', marginRight: '10px' }} />
                                        <Button variant="primary">Aceitar</Button>
                                        <Button variant="primary" style={{ '--bs-danger': '#dc3545', '--bs-danger-rgb': '220,53,69', background: 'var(--bs-red)', borderStyle: 'none' }}>
                                            Excluir
                                        </Button>
                                        <p className="float-start" style={{ fontSize: '18px' }}>
                                            <strong>Zetsu Negro</strong> enviou uma solicitação de amizade
                                        </p>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ borderStyle: 'none', background: '#defcf3', marginBottom: '5px' }}>
                                        <Image className="float-start" src="https://criticalhits.com.br/wp-content/uploads/2020/08/hashirama-modo-s%C3%A1bio.jpg" style={{ width: '80px', marginRight: '10px' }} />
                                        <p className="float-start" style={{ fontSize: '18px' }}>
                                            <strong>Hashirama Senju</strong> Marcou você em uma foto
                                        </p>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ borderStyle: 'none', background: '#defcf3', marginBottom: '5px' }}>
                                        <Image className="float-start" src="https://criticalhits.com.br/wp-content/uploads/2021/11/Kakuzu.jpg" style={{ width: '80px', marginRight: '10px' }} />
                                        <p className="float-start" style={{ fontSize: '18px' }}>
                                            <strong>Kakuzu</strong> Se mudou para aldeia da cachoeira
                                        </p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Container>
                        </Col>

                        <Col>

                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Notificacoes