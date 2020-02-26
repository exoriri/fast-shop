/* Vendors */
import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core/'

export const Signup = () => (
  <div>
    <h1>Signup</h1>
    <FormGroup
      helperText="Helper text with details..."
      label="Label A"
      labelFor="text-input"
      labelInfo="(required)"
    >
      <InputGroup id="text-input" placeholder="Placeholder text" />
    </FormGroup>
  </div>
);
