import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { connect } from "react-redux";
import { post } from '../../redux/actions/post';

const Post = ({ post, userid, postId }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setPostData({ title: '', body: '' })
    };
    const handleShow = () => setShow(true);

    const [postData, setPostData] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(userid, postData.title, postData.body)
    }

    useEffect(() => {
        if(postId){
            setShow(false);
            setPostData({ title: '', body: '' })
        }
    },[postId])

    return (
        <>
            Something on mind? Write it down...{" "}
            <Button
                variant='primary'
                onClick={handleShow}
            >
                Post
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a post.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Control type="text" placeholder="Title" name="title" onBlur={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Control as="textarea" placeholder="Body" name="body" onBlur={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    userid: state.auth.user.id,
    postId: state.post.posts.id
});

const mapDispatchToProps = {
    post
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
