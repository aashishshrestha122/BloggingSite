import http from '../utils/http';

export const postComment = async (postId, userid, comment) => {
    const { data } = await http.post('/comments/post-comment', { postId, userid, comment });

    return data;
};
