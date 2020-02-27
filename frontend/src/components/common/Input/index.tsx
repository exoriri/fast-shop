import React from "react";

interface IInput {
  id?: string,
  type: string,
  className?: string,
  placeholder?: string,
  onChange?: () => void
}

export const Input = ({
  id,
  type,
  onChange= e => e,
  className,
  placeholder
}): React.FunctionComponentElement<IInput> => (
  <input
    id={id}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);
