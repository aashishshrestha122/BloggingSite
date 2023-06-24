import React from 'react';
import Post from './post';
import Feed from './feed';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container>
            <Row style={{marginTop : "20px"}}>
                <Col></Col>
                <Col xs={6}><Post /></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={5}><Feed /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Home;