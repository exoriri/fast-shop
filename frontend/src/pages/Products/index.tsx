/* Vendors */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from '@blueprintjs/core';

import { getProducts } from '../../actions';

import { Loader } from '../../components';

import styles from './styles.pcss';

const Products = ({ items, getProducts, loading }) => {
    console.log(items)
    useEffect(() => {
        getProducts()
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
            {items.map(product => (
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

const mapStateToProps = ({ products }) => {
    const { items, loading } = products;

    return {
        items,
        loading
    }
};

const actionsCreators = {
    getProducts
}

const connectedProducts = connect(mapStateToProps, actionsCreators)(Products);

export { connectedProducts as Products };