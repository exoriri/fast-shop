/* Vendors */
import React, { useState, useEffect } from 'react';
import { Card, Button } from '@blueprintjs/core';

import { getProducts } from '../../api';

import { Loader } from '../../components';

import styles from './styles.pcss';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getProducts()
                .then((res: any) => {
                    setProducts(res.items);
                    setLoading(false);
                })
    },[]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            {products.map(product => (
                <Card className={styles.card}>
                    <img src={product.imgSrc} alt="product-description" />
                    <h3>{product.price.split('/').join('')}</h3>
                    <p>{product.description}</p>
                    <Button className={`${styles.productBtn} bp3-intent-primary`}>
                        Add to cart
                    </Button>
                </Card>
            ))}
        </div>
    );
};