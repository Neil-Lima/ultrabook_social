import React from 'react';
import { Col, Card, ListGroup, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrupos, faGlobe, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import CardPost from '../../components/CardPost';
import CardStories from '../../components/CardStories';
import CardListaAmigos from '../../components/CardListaAmigos';
import CardBlog from '../../components/CardBlog';
import CardAddPost from '../../components/CardAddPost';
import Layout from '../../layout/Layout';

const Grupos = () => {
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
                    <Row>
                        <Col>
                            <Card style={{ textAlign: 'center' }}>
                                <Card.Img variant="top" src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/10/maxresdefault-57.jpg" />
                                <Card.Body>
                                    <Card.Img src="https://i.pinimg.com/originals/32/d1/7e/32d17ec2a3e74171ba6b6cecc3786607.png" style={{ width: '64px', marginBottom: '10px', marginRight: '0px', marginTop: '-59px' }} />
                                    <Card.Title>Uchihas</Card.Title>
                                    <Card.Subtitle>Grupo fechado <i className="fas fa-lock" style={{ color: 'var(--bs-blue)', margin: '5px' }}></i></Card.Subtitle>
                                    <label className="form-label">
                                        <span style={{ color: 'rgb(108, 117, 125)' }}>23k Membros</span><br />
                                    </label>
                                    <Button variant="primary" style={{ background: 'var(--bs-green)' }}>Participando</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ textAlign: 'center' }}>
                                <Card.Img variant="top" src="https://static.wikia.nocookie.net/naruto/images/c/ca/Selo_Triangular_Konohamaru%28Anime%29.png/revision/latest?cb=20191016174725&amp;path-prefix=pt-br" />
                                <Card.Body>
                                    <Card.Img src="https://pm1.aminoapps.com/6363/2f7f4fcbb42c206b35586f72516becbee7da0992_00.jpg" style={{ width: '64px', marginBottom: '10px', marginRight: '0px', marginTop: '-59px' }} />
                                    <Card.Title>Selamentos</Card.Title>
                                    <Card.Subtitle>Grupo público <i className="fas fa-globe-americas" style={{ color: 'var(--bs-blue)', margin: '5px' }}></i></Card.Subtitle>
                                    <label className="form-label">
                                        <span style={{ color: 'rgb(108, 117, 125)' }}>23k Membros</span><br />
                                    </label>
                                    <Button variant="primary" style={{ background: 'var(--bs-primary)' }}>Participar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ textAlign: 'center' }}>
                                <Card.Img variant="top" src="https://static.wikia.nocookie.net/naruto/images/f/f7/T%C3%A9cnica_de_Invoca%C3%A7%C3%A3o.png/revision/latest?cb=20141220104634&amp;path-prefix=pt-br" />
                                <Card.Body>
                                    <Card.Img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a78b575d-a4f8-4d42-a3cd-c15e5b9da39a/d9bbj65-30492047-64a7-439c-990f-c5ef4a475814.png/v1/fill/w_400,h_357/gamabunta_head_logo_from_naruto__by_kaji_zu_d9bbj65-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3OGI1NzVkLWE0ZjgtNGQ0Mi1hM2NkLWMxNWU1YjlkYTM5YVwvZDliYmo2NS0zMDQ5MjA0Ny02NGE3LTQzOWMtOTkwZi1jNWVmNGE0NzU4MTQucG5nIiwiaGVpZ2h0IjoiPD0zNTciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2E3OGI1NzVkLWE0ZjgtNGQ0Mi1hM2NkLWMxNWU1YjlkYTM5YVwva2FqaS16dS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.pV4gh4a405AEycY6i_PpEJIgHaEW1xBAsfFKSlmhJZE" style={{ width: '64px', marginBottom: '10px', marginRight: '0px', marginTop: '-59px' }} />
                                    <Card.Title>Invocações</Card.Title>
                                    <Card.Subtitle>Grupo fechado <i className="fas fa-lock" style={{ color: 'var(--bs-blue)', margin: '5px' }}></i></Card.Subtitle>
                                    <label className="form-label">
                                        <span style={{ color: 'rgb(108, 117, 125)' }}>23k Membros</span><br />
                                    </label>
                                    <Button variant="primary" style={{ background: 'var(--bs-primary)' }}>Participar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </Col>

                    <Col>
                        <CardListaAmigos />
                        <CardBlog />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Grupos;
