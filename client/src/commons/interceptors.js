import HttpStatus from 'http-status-codes';

import http from '../utils/http';
import * as authService from '../services/auth';
import * as tokenUtil from '../utils/token';

let heldRequests = [];
let isTokenBeingRefreshed = false;

/**
 * Build authorization header.
 *
 * @param {string} accessToken
 *
 * @returns {string}
 */
function getAuthorizationHeader(accessToken) {
    return `Bearer ${accessToken}`;
}

/**
 * Interceptor to add Access Token header for all requests.
 *
 * @param {object} request
 *
 * @returns {object}
 */
export function authorizationInterceptor(request) {
    const accessToken = tokenUtil.getAccessToken();

    if (accessToken && !request.headers['Authorization']) {
        request.headers['Authorization'] = getAuthorizationHeader(accessToken);
    }

    return request;
}

/**
 * Interceptor to refresh Authorization header.
 *
 * @param {object} error
 *
 * @returns {object}
 */
export async function unauthorizedResponseHandlerInterceptor(error) {
    if (!error.response) {
        return Promise.reject(error);
    }

    const originalRequest = error.config;
    const path = originalRequest.url;

    const isUnAuthorized =
        error.response.status === HttpStatus.UNAUTHORIZED && path !== `/refresh-token`;

    if (isUnAuthorized) {
        const refreshToken = tokenUtil.getRefreshToken();

        if (!refreshToken) {
            tokenUtil.clear();

            return redirectToLogin();
        }

        if (isTokenBeingRefreshed) {
            try {
                const newAccessToken = await holdRequest();

                originalRequest.headers['Authorization'] = getAuthorizationHeader(
                    newAccessToken
                );

                return http.request(originalRequest);
            } catch (err) {
                return Promise.reject(err);
            }
        }

        isTokenBeingRefreshed = true;

        try {
            const { refreshToken: newRefreshToken, accessToken } = await authService.refresh(refreshToken);

            isTokenBeingRefreshed = false;
            tokenUtil.setRefreshToken(newRefreshToken);
            tokenUtil.setAccessToken(accessToken);
            originalRequest.headers['Authorization'] = getAuthorizationHeader(
                accessToken
            );

            releaseHeldRequests(null, accessToken);

            return http.request(originalRequest);
        } catch (err) {
            releaseHeldRequests(err, null);
            if (err.response && err.response.status === HttpStatus.UNAUTHORIZED) {
                tokenUtil.clear();

                redirectToLogin();
            }
        }
    }

    return Promise.reject(error);
}

/**
 * Release held requests.
 *
 * @param {object} err
 * @param {string} refreshedAccessToken
 */
function releaseHeldRequests(err, refreshedAccessToken = null) {
    heldRequests.forEach((elementPromise) => {
        if (err) {
            elementPromise.reject(err);
        } else {
            elementPromise.resolve(refreshedAccessToken);
        }
    });
    heldRequests = [];
}

/**
 * Hold request in array.
 *
 * @returns {Promise<Array>}
 */
function holdRequest() {
    return new Promise((resolve, reject) => {
        heldRequests.push({ resolve, reject });
    });
}

/**
 * Redirects to the login page.
 */
export function redirectToLogin() {
    window.location.href = '/login';
}
