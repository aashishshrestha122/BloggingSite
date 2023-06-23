import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login as loginUser } from "../../redux/actions/auth";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const Login = ({ loginUser, user }) => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const signUp = () => {
        navigate('/signup');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = userDetails;
        await loginUser(username, password)
    }

    useEffect(() => {
        if (user.accessToken) {
            navigate('/home')
        }
    }, [user.accessToken])


    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Blogging Site</h2>
                                    <p className=" mb-5">Please enter your username and password!</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formusername">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter username" name="username" onBlur={(e) => handleChange(e)} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" name="password" onBlur={(e) => handleChange(e)} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                >
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <button onClick={signUp} className="text-primary fw-bold">
                                                    Sign Up
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    user: state.auth.user
});

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
