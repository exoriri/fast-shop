/* Vendors */
import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core/";

/* Components */
import { Form } from "../../components";

import styles from './styles.pcss';

export const Signup = () => (
  <div className={styles.bg}>
    <Form className={styles.form}>
      <h1>Signup</h1>
      <FormGroup
        helperText="Helper text with details..."
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-input" placeholder="Placeholder text" />
      </FormGroup>
    </Form>
  </div>
);
