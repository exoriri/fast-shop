/* Vendors */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";

/* services */
import { signin } from '../../services/backend/user.service';

/* Components */
import { Form, Input } from "../../components";

export const Login = () => {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = e => {
    setFields({ ...fields, [e.target.id]: e.target.value });
    console.log(fields);
  };


  const login = () => {
    setLoading(true);
    const { email, password } = fields;
    signin({ email, password })
      .then(data => {
        setLoading(false);
        console.log(data);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      })
  }

  return <div className="registration">
    <Form className="registration__form">
      <h1 className="registration__form-title">Hello! Enter to your account</h1>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">
          Email
        </label>
        <Input
          type="text"
          value={fields.email}
          id="email"
          onChange={handleChange}
          placeholder="Enter your email here"
          className="registration__input"
        />
      </div>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">
          Password
        </label>
        <input
          type="password"
          value={fields.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password here"
          className="registration__input"
        />
      </div>
      <Button 
        disabled={isLoading} 
        onClick={login}
        className="registration__btn bp3-intent-primary">Sign in</Button>
      <Link className="registration__link" to="/signup">
        Don't have have an account?
      </Link>
    </Form>
  </div>
};
