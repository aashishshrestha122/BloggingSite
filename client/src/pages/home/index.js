import React, { useState, useEffect } from 'react';
import Post from './post';
import Feed from './feed';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, Form } from 'react-bootstrap';

import { searchPost } from '../../redux/actions/post';

const Home = ({ user, searchPost, searchedPost }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    }

    const [searchText, setSearchText] = useState('');

    const handleSearch = async (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        searchPost(searchText)
    }, [searchText])

    useEffect(() => { }, [])
    return (
        <Container>
            <Row style={{ marginTop: "20px" }}>
                <Col></Col>
                <Col xs={6}>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formSearch">
                                <Form.Control type="text" placeholder="Search" name="search" onChange={handleSearch} />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <span>{user && user.username ? user.username : ''}</span>{''}
                    <Button variant='danger' onClick={logout}>Logout</Button>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col></Col>
                <Col xs={5}>
                    <Post />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    {
                        searchText ?
                            <div style={{ height: '550px', overflow: 'scroll', marginBottom: '20px', marginTop: '20px' }}>
                                {searchedPost && searchedPost.length && searchedPost.map(post => (
                                    <Card Card style={{ marginBottom: "20px" }} >
                                        <Card.Body key={post.id}>
                                            <Card.Title>
                                                {post.title}
                                            </Card.Title>

                                            <Card.Text>
                                                {post.post}
                                                <br /><br /><b><i>~by {post.postedBy}</i></b>
                                            </Card.Text>
                                            {console.log(post)}
                                            {/* {
                                                post.comment && post.comment.length ? post.comment.map(comment => (
                                                    <Card.Text><b>{comment.commentedBy}</b> : {comment.comment}</Card.Text>
                                                )) : ''
                                            } */}
                                        </Card.Body>
                                    </Card >
                                ))
                                }
                            </div>
                            :
                            <Feed />
                    }
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    searchedPost: state.post.searchedPost
});


const mapDispatchToProps = {
    searchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
