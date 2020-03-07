import axios from 'axios';

const url = process.env.NODE_ENV === 'developement' ? 
    'http://127.0.0.1:3000/' : 'https://afternoon-inlet-00968.herokuapp.com/';

export const signup = (email, password) => (
    axios.post('/signup', {
        email,
        password
    }).then(res => res.data)
);

export const getProducts = () => (
    axios.get(`${url}/products`).then(res => res.data)
);