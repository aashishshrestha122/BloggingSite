import * as security from '../utils/security';
import { getUserDetail } from '../services/user';
import TokenError from '../errors/token';
import AuthenticationError from '../errors/authentication';

export const verifyToken = async (req, res, next) => {

    const { authorization = '' } = req.headers;

    const [tokenType, token] = authorization.split(' ').filter(Boolean);

    if (tokenType !== 'Bearer' || !token) {
        const tokenError = new TokenError('Token Required');

        return next(tokenError);
    }

    let decryptedToken = null;

    try {
        decryptedToken = security.decrypt(token).encryptedData;
        req.user = await getUserDetail(decryptedToken.id);

        return next();
    } catch (err) {
        return next(new AuthenticationError('Not Authorized'));
    }
}

export const verifyRefreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    let decryptedToken = null;

    try {
        decryptedToken = security.decrypt(refreshToken).encryptedData;
        req.user = await getUserDetail(decryptedToken.id);

        return next();
    } catch (err) {
        console.log(err);
        return next(new AuthenticationError('Not Authorized'));
    }
}