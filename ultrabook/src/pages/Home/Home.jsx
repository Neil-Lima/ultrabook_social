import React from 'react';
import { Col, Card, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import CardPerfil from '../../components/CardPerfil';
import CardTotal from '../../components/CardTotal';
import CardItem from '../../components/CardItem';
import CardPost from '../../components/CardPost';
import CardStories from '../../components/CardStories';
import CardListaAmigos from '../../components/CardListaAmigos';
import CardBlog from '../../components/CardBlog';
import CardAddPost from '../../components/CardAddPost';
import Layout from '../../layout/Layout';

const MyComponent = () => {
    return (
        <Layout>
        <Row style={{ marginTop: "80px" }}>
            <Col>
                <CardPerfil />
                <CardTotal />
                <CardItem />
            </Col>

            <Col md={6} lg={7} xl={6}>
                <CardStories />
                <CardAddPost/>
                <CardPost />
            </Col>

            <Col>
                <CardListaAmigos />
                <CardBlog/>
            </Col>
        </Row>
        </Layout>
    );
};

export default MyComponent;
