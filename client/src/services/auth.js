import { refreshTokenHttp } from '../utils/http';

export const refresh = async (refreshToken) => {
    try {
        const { data } = await refreshTokenHttp.post('/auth/refresh-token', { refreshToken });

        return data;
    } catch (err) {
        console.log(err);
    }
}
