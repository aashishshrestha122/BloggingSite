import http from './utils/http';
import * as interceptors from './commons/interceptors';

/**
 * Initialize interceptors for the application.
 */
function initInterceptors() {
    http.interceptors.request.use(interceptors.authorizationInterceptor);

    http.interceptors.response.use(
        response => response,
        /**
         * This interceptor checks if the response had a 401 status code, which means
         * that the access token used for the request has expired. It then refreshes
         * the access token and resends the original request.
         */
        interceptors.unauthorizedResponseHandlerInterceptor
    );
}

export default () => {
    initInterceptors();
};
