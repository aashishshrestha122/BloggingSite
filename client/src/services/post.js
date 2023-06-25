import http from '../utils/http';

export const post = async (userid, title, body) => {
    const { data } = await http.post('/posts/create-posts', { userid, title, body });

    return data;
};

export const getAllPosts = async (paginationData) => {
    try {
        const { data } = await http.post("/posts/view-posts", { paginationData });

        return data;
    } catch (err) {
        console.log(err);
    }
};

export const editPost = async (postId, userId, title, body) => {
    const { data } = await http.post('/posts/edit-post', { postId, userId, title, body });

    return data;
};

export const deletePost = async (postId) => {
    const { data } = await http.put('/posts/delete-post', { postId });

    return data;
};

export const searchPost = async (searchData) => {
    const { data } = await http.post('/posts/search-post', { searchData });

    return data;
};