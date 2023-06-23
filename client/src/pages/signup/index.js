import { React, useState, useEffect } from 'react';
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const SignUp = ({ signup, userId }) => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    })

    const [signUpStatus, setSignUpStatus] = useState({ isDisabled: false })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (userDetails.username && userDetails.password) {
            setSignUpStatus(false)
        } else {
            setSignUpStatus(true)
        }
    }, [userDetails.username, userDetails.password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = userDetails;
        await signup(username, password);
    }

    useEffect(() => {
        if (userId) navigate('/login');
    }, [userId])

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
                                    <p className=" mb-5">Sign Up</p>
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
                                                    onClick={handleSubmit}
                                                    disabled={signUpStatus}
                                                >
                                                    Sign Up
                                                </Button>
                                            </div>
                                        </Form>
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
    isAuthenticated: state.users.isAuthenticated,
    loading: state.users.loading,
    userId: state.users.id
});

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
