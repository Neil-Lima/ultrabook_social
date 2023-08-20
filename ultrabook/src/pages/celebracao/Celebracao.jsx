import React from 'react';
import { Col, Card, ListGroup, Row, Container } from 'react-bootstrap';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import { Box, Heading, ListItem, UnorderedList, Image, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { FaBirthdayCake } from 'react-icons/fa';
import Layout from '../../layout/Layout';

const Celebracao = () => {
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
                        <Heading as="h3">Aniversariantes</Heading>
                        <UnorderedList className="list-group" style={{ listStyleType: 'none', padding: 0 }}>
                            <ListItem style={{ borderStyle: 'none' }}>
                                <Box>
                                    <Heading as="h5" fontSize="md" display="flex" alignItems="center">
                                        Sakura Haruno
                                        <FaBirthdayCake style={{ margin: '5px', marginLeft: '7px', fontSize: '32px', color: 'var(--chakra-colors-pink-500)' }} />
                                    </Heading>
                                    <InputGroup>
                                        <InputLeftAddon backgroundColor="rgba(233, 236, 239, 0)" borderStyle="none">
                                            <Image src="https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/12/sakura-1280x720.webp" w="70px" />
                                        </InputLeftAddon>
                                        <Input className="border rounded-pill form-control" type="text" backgroundColor="#efefef" placeholder="Feliz aniversário querida" />
                                    </InputGroup>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderStyle: 'none' }}>
                                <Box>
                                    <Heading as="h5" fontSize="md" display="flex" alignItems="center">
                                        Sasori
                                        <FaBirthdayCake style={{ margin: '5px', marginLeft: '7px', fontSize: '32px', color: 'var(--chakra-colors-primary)' }} />
                                    </Heading>
                                    <InputGroup>
                                        <InputLeftAddon backgroundColor="rgba(233, 236, 239, 0)" borderStyle="none">
                                            <Image src="https://sm.ign.com/ign_br/screenshot/default/sasoris-face_s9nr.jpg" w="70px" />
                                        </InputLeftAddon>
                                        <Input className="border rounded-pill form-control" type="text" backgroundColor="#efefef" placeholder="Feliz aniversário querido" />
                                    </InputGroup>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderStyle: 'none' }}>
                                <Box>
                                    <Heading as="h5" fontSize="md" display="flex" alignItems="center">
                                        Yamato
                                        <FaBirthdayCake style={{ margin: '5px', marginLeft: '7px', fontSize: '32px', color: 'var(--chakra-colors-primary)' }} />
                                    </Heading>
                                    <InputGroup>
                                        <InputLeftAddon backgroundColor="rgba(233, 236, 239, 0)" borderStyle="none">
                                            <Image src="https://criticalhits.com.br/wp-content/uploads/2021/11/A_Marca_na_M3Fo_de_Yamato.png" w="70px" />
                                        </InputLeftAddon>
                                        <Input className="border rounded-pill form-control" type="text" backgroundColor="#efefef" placeholder="Feliz aniversário querido" />
                                    </InputGroup>
                                </Box>
                            </ListItem>
                        </UnorderedList>
                    </Col>
                  <Col>
                  </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Celebracao;
