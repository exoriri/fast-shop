/* Vendors */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";

/* Components */
import { Form, Input } from "../../components";

export const Login = () => (
  <div className="registration">
    <Form className="registration__form">
      <h1 className="registration__form-title">Hello! Enter to your account</h1>
      <div className="registration__form-group">
        <label className="registration__label" htmlFor="email">
          Email
        </label>
        <Input
          type="text"
          id="email"
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
          id="password"
          placeholder="Enter your password here"
          className="registration__input"
        />
      </div>
      <Button className="registration__btn bp3-intent-primary">Sign in</Button>
      <Link className="registration__link" to="/signup">
        Don't have have an account?
      </Link>
    </Form>
  </div>
);
