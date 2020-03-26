import React from "react";

import styles from './styles.pcss';

interface IInput {
  id?: string,
  type: string,
  value: string,
  className?: string,
  placeholder?: string,
  onChange?: () => void
}

export const Input = ({
  id,
  type,
  value,
  onChange= e => e,
  className,
  placeholder
}): React.FunctionComponentElement<IInput> => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`${className} ${styles.input}`}
  />
);
