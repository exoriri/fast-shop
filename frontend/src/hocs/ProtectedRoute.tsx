import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component, path, ...rest }) => {
    const userToken = localStorage.getItem('token');

    if (!userToken) {
        return <Redirect to='/protected' />;
    }

    return <Route to={path} component={component} {...rest} />
};