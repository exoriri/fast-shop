import * as actions from '../constants';

import { Product } from '../services';

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: actions.PRODUCTS_GET })
        Product.get()
            .then(({items}) => {
                dispatch({ type: actions.PRODUCTS_GET_SUCCESS, payload: items })
            })
            .catch(err => {
                console.log(err)
            })
    }
}