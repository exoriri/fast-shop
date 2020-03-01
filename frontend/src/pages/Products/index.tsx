/* Vendors */
import React, { useState, useEffect } from 'react';

import { getProducts } from '../../api';

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            getProducts()
                .then((res: any) => setProducts(res))
    },[]);
    console.log(products);
    return (
        <div>
            Hi
        </div>
    );
};