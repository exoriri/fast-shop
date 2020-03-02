import * as actions from '../constants';

const INITIAL_STATE = {
    loading: false,
    items: []
};

export const products = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.PRODUCTS_GET: {
            return {
                loading: true
            }
        }
        case actions.PRODUCTS_GET_SUCCESS: {
            return {
                loading: false,
                items: action.payload
            }
        }
        default:
            return state;
    }
};