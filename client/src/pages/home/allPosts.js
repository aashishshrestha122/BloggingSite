import React, { useEffect, useState } from 'react';

import { Button, Card, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { connect } from "react-redux";
import { getAllPosts, editPost } from '../../redux/actions/post';
import { postComment } from '../../redux/actions/comment';

const AllPosts = ({ getAllPosts, allPosts, editPost, post, userId, postComment, commentId, updatedPostLoading }) => {

    useEffect(() => {
        getAllPosts();
    }, [post, commentId])

    useEffect(() => {
        setShow(false);
    }, [updatedPostLoading])

    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = async (postId) => {
        await postComment(postId, userId, comment);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };


    const [postDetails, setPostDetailsData] = useState({
        postId: '',
        userId: '',
        title: '',
        body: ''
    })

    const handleShow = (postId, userId, title, body) => {
        setShow(true);
        setPostDetailsData({
            postId: postId,
            userId: userId,
            title: title,
            body: body
        })
    }

    const handleEditChange = (e) => {
        setPostDetailsData({
            ...postDetails,
            [e.target.name]: e.target.value
        })
    }
    const handleEdit = async () => {
        await editPost(postDetails.postId, postDetails.userId, postDetails.title, postDetails.body)
    }

    return (
        <>
            {allPosts && allPosts.length && allPosts.map(post => (
                <Card style={{ marginBottom: "20px" }} >
                    <Card.Body>
                        <Card.Title>
                            {post.title}
                            <Button variant='secondary' onClick={() => handleShow(post.id, userId, post.title, post.body)}>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </Card.Title>

                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        {
                            post.comments && post.comments.length ? post.comments.map(comment => (
                                <Card.Text><b>{comment.username}</b> : {comment.body}</Card.Text>
                            )) : ''
                        }
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3 " controlId="formComment">
                                    <Form.Control type="text" placeholder="Enter Comment" name="comment" onBlur={handleChange} />
                                </Form.Group>
                                <Button
                                    variant='primary'
                                    style={{ padding: "6px" }}
                                    onClick={() => handleSubmit(post.id)}
                                >
                                    Comment
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Control type="text" placeholder="Title" name="title" onChange={handleEditChange} value={postDetails.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Control as="textarea" placeholder="Body" name="body" onChange={handleEditChange} value={postDetails.body} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


const mapStateToProps = (state) => ({
    allPosts: state.post.allPosts,
    post: state.post.posts.id,
    updatedPostLoading: state.post.loading,
    userId: state.auth.user.id,
    commentId: state.comment.comment.insertId
});

const mapDispatchToProps = {
    getAllPosts,
    postComment,
    editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
