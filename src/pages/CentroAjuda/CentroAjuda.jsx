import React from 'react';
import { Box, Input, InputGroup, InputRightElement, Button, Icon } from '@chakra-ui/react';
import { FaHeadphones, FaSearch } from 'react-icons/fa';
import Layout from '../../layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';

function CentroAjuda() {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: "80px" }}>
                    <Col>
                        <CardPerfil />
                        <CardTotal />
                        <CardItem />
                    </Col>

                    <Col md={7} lg={7} xl={6}>
                        <Box textAlign="center" p="4">
                            <Box className="card">
                                <Box className="card-body">
                                    <FaHeadphones style={{ fontSize: '107px', margin:"auto" }} />
                                    <Box as="h1" className="card-title" fontSize="2xl" mt="4">
                                        Podemos Ajudar???
                                    </Box>
                                    <Box className="card-text" fontSize="lg" mt="2">
                                        Entre em contato conosco, podemos retirar todas as suas dúvidas.
                                    </Box>
                                    <InputGroup mt="4" maxW="md" mx="auto" style={{padding:"8px"}}>
                                        <Input
                                            type="text"
                                            h="auto"
                                            bg="#dee5eb"
                                            placeholder="Tire suas dúvidas"
                                        />
                                        <InputRightElement width="3rem" style={{padding:"8px"}}>
                                            <Button h="100%" variant="primary">
                                                <Icon as={FaSearch} />
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                            </Box>
                        </Box>
                    </Col>

                    <Col>
                       
                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}

export default CentroAjuda;
