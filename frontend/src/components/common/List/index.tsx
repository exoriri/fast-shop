import React from 'react';

import styles from './styles.pcss';

interface IList {
    className?: string
}

export const List = ({ children, className }): React.FunctionComponentElement<IList> => (
    <ul className={`${styles.list} ${className}`}>
        {children}
    </ul>
);