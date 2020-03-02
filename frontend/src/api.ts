import axios from 'axios';

export const signup = (email, password) => (
    axios.post('/signup', {
        email,
        password
    }).then(res => res.data)
);

export const getProducts = () => (
    axios.get('http://127.0.0.1:3000/products').then(res => res.data)
);