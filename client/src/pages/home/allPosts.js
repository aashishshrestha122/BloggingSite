import React, { useEffect, useState } from 'react';

import { Button, Card, Form } from 'react-bootstrap';

import { connect } from "react-redux";
import { getAllPosts } from '../../redux/actions/post';
import { postComment } from '../../redux/actions/comment';


const AllPosts = ({ getAllPosts, allPosts, post, userId, postComment, commentId }) => {

    useEffect(() => {
        getAllPosts();
    }, [post, commentId])

    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = async (postId) => {
        await postComment(postId, userId, comment);
    }

    return (
        allPosts && allPosts.length && allPosts.map(post => (
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
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
    )
}


const mapStateToProps = (state) => ({
    allPosts: state.post.allPosts,
    post: state.post.posts.id,
    userId: state.auth.user.id,
    commentId: state.comment.comment.insertId
});

const mapDispatchToProps = {
    getAllPosts,
    postComment
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
