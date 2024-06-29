import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'; // Import necessary React Bootstrap components
import YouTube from 'react-youtube';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import Layout from '../../layout/Layout';

const videos = [
    {
        id: '88rSvVpyXNA',
        title: 'O DIA QUE O ITACHI FRITOU OVO',
        description: 'Itachi preparando ovos.'
    },
    {
        id: '6Nm30l3oX6c',
        title: 'Kaguya vs Time 7',
        description: 'Batalha épica entre Kaguya e o Time 7.'
    },
    {
        id: 'kvgC_h9fGL0',
        title: 'NARUTO VS PAIN',
        description: 'Confronto emocionante entre Naruto e Pain.'
    },
    {
        id: '0DcPelwP9j4',
        title: 'Naruto vs Isshiki',
        description: 'Naruto enfrentando Isshiki em uma batalha intensa.'
    },
    {
        id: 'nx8M_m9u-Xc',
        title: 'Momoshiki e Boruto VS Kawaki',
        description: 'Combate frenético entre Momoshiki, Boruto e Kawaki.'
    },
    {
        id: 'DygWcYB_v-M',
        title: 'Jigen invade Konoha em busca de Kawaki',
        description: 'Jigen invade Konoha em busca de Kawaki.'
    }
];

function PostVideo() {
    const videoOpts = {
        height: '360',
        width: '100%',
        playerVars: {
            // Aqui você pode adicionar parâmetros personalizados para o vídeo do YouTube
        }
    };

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
                        {videos.map((video) => (
                            <Card key={video.id} style={{ marginBottom: '20px' }}>
                                <YouTube videoId={video.id} opts={videoOpts} />
                                <Card.Body>
                                    <Card.Title>{video.title}</Card.Title>
                                    <Card.Text>{video.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    <Col>
                        {/* Add additional components as needed */}
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default PostVideo;
