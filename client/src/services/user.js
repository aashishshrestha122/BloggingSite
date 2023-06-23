import http from '../utils/http';

export const login = async (username, password) => {
    const { data } = await http.post('/auth/login', { username, password });

    return data;
};

/**LOGOUT**/
export const logout = async (name, password) => {
    try {
        const data = "";
        // const { data } = await http.post("/auth/logout", { name, password });
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const signup = async (username, password) => {
    const { data } = await http.post('/auth/create-user', { username, password });

    return data;
};
