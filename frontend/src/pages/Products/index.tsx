/* Vendors */
import React, { useState, useEffect } from 'react';
import { Card, Button } from '@blueprintjs/core';

import { getProducts } from '../../api';
import { useStore } from '../../store';

import { Loader, Header } from '../../components';

import styles from './styles.pcss';

export const Products = () => {
    const store = useStore();

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
            <>
                <Header />
                <div className={styles.loading}>
                    <Loader />
                </div>
            </>
        );
    }

    return (
        <>
        <Header />
        <div className={styles.wrapper}>
            {products.map(product => (
                <Card className={styles.card}>
                    <img src={product.imgSrc} alt="product-description" />
                    <h3>{product.price.split('/').join('')}</h3>
                    <p>{product.description}</p>
                    <Button 
                        className={`${styles.productBtn} bp3-intent-primary`}
                        onClick={(e) => {
                            store.saveProduct(product);
                            e.target.innerHTML = 'Added'
                        }}
                    >
                        Add to cart
                    </Button>
                </Card>
            ))}
        </div>
        </>
    );
};