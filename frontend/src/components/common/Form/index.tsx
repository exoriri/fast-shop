import React from 'react';

export const Form = ({ children, className }) => (
    <form className={className}>
        { children }
    </form>
); 