import React from 'react';
import Post from './post';
import Feed from './feed';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Home = ({ user }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    }
    return (
        <Container>
            <Row style={{ marginTop: "20px" }}>
                <Col></Col>
                <Col xs={6}></Col>
                <Col>
                    <span>{user && user.username ? user.username : ''}</span>{''}
                    <Button variant='danger' onClick={logout}>Logout</Button>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col></Col>
                <Col xs={5}><Post /></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}><Feed /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Home);
