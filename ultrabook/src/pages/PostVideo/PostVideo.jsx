import React from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap';
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
                    <Box w="100%" p={4}>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} colSpan={{ base: 6, md: 2 }}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://skdesu.com/wp-content/uploads/2022/09/itachi.jpg" alt="Itachi Uchiha" />
              <Box p={3}>
                <VStack align="start">
                  <Text fontSize="lg" fontWeight="bold">Itachi Uchiha</Text>
                  <Text fontSize="sm" color="gray.500">156.9k views</Text>
                </VStack>
                <Text mt={2}><strong>Itachi preparando ovos.</strong></Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
                    </Col>

                    <Col>

                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}

export default PostVideo;
