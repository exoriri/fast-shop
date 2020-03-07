/* Vendors */
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

import { List, Input, Form, Badge } from '../index';

import { useStore } from '../../store';

import styles from './styles.pcss';

export const Header = observer(() => {
    const { savedProducts } = useStore();

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
                <li className={`${styles.listItem} ${styles.listItem__badged}`}>
                    <Icon icon="shopping-cart" iconSize={30} color="#fff" />
                    {savedProducts.length !== 0 && ( 
                        <Badge 
                            size="sm" 
                            color="red" 
                            className={`${styles.badge} 
                            `}
                        >
                            <p className={styles.badge__label}>{savedProducts.length}</p>
                        </Badge>)
                    }
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.login} to="/login">Login</Link>
                </li>
            </List>
        </div>
    </header>
});