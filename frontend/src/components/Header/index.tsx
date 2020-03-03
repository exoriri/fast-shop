/* Vendors */
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

import { List, Input, Form } from '../index';

import { useStore } from '../../store';

import styles from './styles.pcss';

export const Header = () => {
    const store = useStore();
    console.log(store)
    return <header className={styles.header}>
        <div className={styles.left}>
            <Link to="/home">
                <Icon icon="home" iconSize={20} color="#fff" />
            </Link>
        </div>
        <div className={styles.right}>
            <List className={styles.rightList}>
                <li className={styles.listItem}>
                    <Form className={styles.searchForm}>
                        <Input 
                            type="text" 
                            id="search" 
                            placeholder="search"
                            className={styles.search}
                        />
                    </Form>
                </li>
                <li className={styles.listItem}>
                    <Icon icon="shopping-cart" iconSize={30} color="#fff" />
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.login} to="/login">Login</Link>
                </li>
            </List>
        </div>
    </header>
};