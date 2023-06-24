import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
// import ProtectedRoutes from './ProtectedRoutes';

import Login from '../pages/login';
import SignUp from '../pages/signup';
import Home from '../pages/home';

export const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<PrivateRoute component={Home} />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}