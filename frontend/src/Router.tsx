/* React */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ProtectedRoute } from './hocs/ProtectedRoute';

/* Components */
import { Signup, Login, Products, Dashboard } from './pages';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/protected" component={() => <div>Protected</div>} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Redirect to='/products' />
        </Switch>
    </BrowserRouter>
);

export default Router;