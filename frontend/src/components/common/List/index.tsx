import React from 'react';

import styles from './styles.pcss';

export const List = ({ children }) => (
    <ul className={styles.list}>
        {children}
    </ul>
);