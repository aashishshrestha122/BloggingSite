import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated },
    ...rest
}) => (
    !isAuthenticated ? (
        <Navigate to="/login" />
    ) : (
        <Fragment>
            <Component />
        </Fragment>
    )
);

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);