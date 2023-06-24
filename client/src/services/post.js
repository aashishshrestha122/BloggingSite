import http from '../utils/http';

export const post = async (userid, title, body) => {
    const { data } = await http.post('/posts/create-posts', { userid, title, body });

    return data;
};

export const getAllPosts = async () => {
    try {
        const { data } = await http.get("/posts/view-posts");

        return data;
    } catch (err) {
        console.log(err);
    }
};
