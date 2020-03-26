/* Vendors */
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import { signup } from '../../services/backend/user.service';

/* Components */
import { Form, Input } from '../../components';

export const Signup = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    setFields({ ...fields, [e.target.id]: e.target.value });
    console.log(fields);
  };

  const register = () => {
    setLoading(true);
    const { firstName, lastName, email, password } = fields;
    signup({ firstName, lastName, email, password })
      .then(data => {
        setLoading(false);
        alert('You have registered successfully');
        history.push('/login');
        console.log(data);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      })
  }

  return <div className="registration">
    <Form className="registration__form">
      <h1 className="registration__form-title">Create a personal account</h1>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="name">First Name</label>
        <Input 
          type="text"
          value={fields.firstName}
          id="firstName"
          onChange={handleChange}
          placeholder="Enter your name" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="surname">Last Name</label>
        <Input 
          type="text" 
          value={fields.lastName}
          id="lastName"
          onChange={handleChange}
          placeholder="Enter your last name" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">Email</label>
        <Input 
          type="text" 
          id="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="Enter your email" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">Password</label>
        <input 
          type="password" 
          id="password"
          value={fields.password}
          onChange={handleChange}
          placeholder="Enter your password" 
          className="registration__input"
        />
      </div>
      <Button disabled={isLoading} className="registration__btn bp3-intent-primary" onClick={() => register()}>
        {isLoading ? 'Loading' : 'Sign up'}
      </Button>
      <Link className="registration__link" to="/login">
        Already have an account?
      </Link>
    </Form>
  </div>
};
