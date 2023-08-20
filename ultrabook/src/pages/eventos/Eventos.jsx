import React from 'react';
import { Box, Badge, Button, Icon, Grid } from '@chakra-ui/react';
import { FaThumbsUp, FaCalendarAlt } from 'react-icons/fa';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../layout/Layout';

function Eventos() {
    const Eventos = [
        {
            imgSrc: 'https://3.bp.blogspot.com/-9336FcynL10/VxjygahPdvI/AAAAAAAAkj8/ZnG12gDTWj4xVGra63qVQfkiVW5ya4GrACLcB/s1600/Jutsus%2Bde%2B%25C3%2581gua%2Bde%2BMei%2BTerumi.jpg',
            badge: 'Oficina para usuários suiton',
            title: 'Jutsus de Água',
            description: 'Venha conhecer nossa oficina para ninjas estilo água que contém os melhores jutsus aquáticos',
            schedule: 'Segunda feira, 19:00, Aldeia da Névoa, localizada no país da água.',
        },
        {
            imgSrc: 'https://2.bp.blogspot.com/-51vAYXaKFUo/WBKRcYTXyoI/AAAAAAAAmpM/WyssGXVjXeEFIYXuCc5vLehCCViXPhVbACLcB/s1600/Madara%2BJutsus%2Bde%2BFogo%2B%2528Katon%2529.jpg',
            badge: 'Oficina para usuários suiton',
            title: 'Jutsus de Fogo',
            description: 'Venha conhecer nossa oficina para ninjas estilo fogo que contém os melhores jutsus de fogo',
            schedule: 'Terça feira, 19:00, Aldeia da Folha, localizada no país do fogo.',
        },
        {
            imgSrc: 'https://3.bp.blogspot.com/-14LOECq7mU0/UfRWC_87YqI/AAAAAAAAUH4/CIM7QAlpwmY/s1600/Fuuton+Tatsu+no+Oshigoto.JPG',
            badge: 'Oficina para usuários fuuton',
            title: 'Jutsus de Vento',
            description: 'Venha conhecer nossa oficina para ninjas estilo vento que contém os melhores jutsus de vento',
            schedule: 'Segunda feira, 19:00, Aldeia da Folha, localizada no país do Fogo.',
        },
        {
            imgSrc: 'https://2.bp.blogspot.com/-dZd_xkHPPyY/UfhBo1arMHI/AAAAAAAAUSk/mIDp2wpKWV4/s1600/Mokuton+Hijutsu+Jokai+Kotan.JPG',
            badge: 'Oficina para usuários Mokuton',
            title: 'Jutsus de Madeira',
            description: 'Venha conhecer nossa oficina para ninjas estilo madeira que contém os melhores jutsus de madeira',
            schedule: 'Quarta feira, 15:00, Aldeia da folha, localizada no país do Fogo.',
        },
        // Adicione outras Eventos aqui
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
                    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt="4">
            {Eventos.map((oficina, index) => (
                <Box key={index} display="flex" flexDirection="column">
                    <Box className="card">
                        <img className="card-img-top w-100 d-block" style={{ marginTop: '8px', height:"150px" }} src={oficina.imgSrc} alt={`Oficina ${index}`} />
                        <Box className="card-body">
                            <Badge className="bg-primary" style={{ marginBottom: '0px', marginTop: '0px', color:'white' }}>{oficina.badge}</Badge>
                            <Box as="h4" className="card-title" style={{ marginTop: '10px' }}>{oficina.title}</Box>
                            <Box className="card-text" >{oficina.description}</Box>
                            <Box>
                                <Icon as={FaCalendarAlt} style={{ color: 'var(--chakra-colors-blue-500)' }} />
                                {' '}
                                {oficina.schedule}
                            </Box>
                            <Button variant="primary" type="button" colorScheme="whiteAlpha" style={{ background: 'var(--chakra-colors-white)', color: 'var(--chakra-colors-blue-500)' }}>
                                <Icon as={FaThumbsUp} />
                                {' '}
                                Interessado
                            </Button>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Grid>
                    </Col>

                    <Col>

                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}

export default Eventos;
