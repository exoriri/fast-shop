/* React */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* Components */
import { Signup, Login, Products } from './pages';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Redirect to='/products' />
        </Switch>
    </BrowserRouter>
);

export default Router;