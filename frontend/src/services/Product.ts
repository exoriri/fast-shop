import axios from 'axios';

export const Product = {
    get() {
        return axios.get('http://127.0.0.1:3000/products').then(res => res.data);
    }
};