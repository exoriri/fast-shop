/* Vendors */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

/* Components */
import { Form, Input } from '../../components';

export const Signup = () => (
  <div className="registration">
    <Form className="registration__form">
      <h1 className="registration__form-title">Create a personal account</h1>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="name">First Name</label>
        <Input 
          type="text" 
          id="name" 
          placeholder="Enter your name" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="surname">Last Name</label>
        <Input 
          type="text" 
          id="surname" 
          placeholder="Enter your last name" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">Email</label>
        <Input 
          type="text" 
          id="email" 
          placeholder="Enter your email" 
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">Password</label>
        <input 
          type="password" 
          id="email" 
          placeholder="Enter your password" 
          className="registration__input"
        />
      </div>
      <Button className="registration__btn bp3-intent-primary">Sign up</Button>
      <Link className="registration__link" to="/login">
        Already have an account?
      </Link>
    </Form>
  </div>
);
