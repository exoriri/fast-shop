/* Vendors */
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

import { List } from '../index';

import styles from './styles.pcss';

export const Header = () => (
    <header className={styles.header}>
        <div className={styles.left}>
            <Icon icon="home" iconSize={20} color="#fff" />
        </div>
        <div className={styles.right}>
            <List>
                <li className={styles.listItem}>
                    <Icon icon="shopping-cart" iconSize={30} color="#fff" />
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.login} to="/login">Login</Link>
                </li>
            </List>
        </div>
    </header>
);