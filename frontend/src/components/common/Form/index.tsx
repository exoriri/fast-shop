import React from 'react';

interface IForm {
    className?: string;
}

export const Form = ({ children, className }): React.FunctionComponentElement<IForm> => (
    <form className={className}>
        { children }
    </form>
); 