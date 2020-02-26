/* React */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Signup, Login } from './pages';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Redirect to='/login' />
        </Switch>
    </BrowserRouter>
);

export default Router;