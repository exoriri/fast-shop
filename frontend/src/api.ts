import axios from 'axios';

export const signup = (email, password) => (
    axios.post('/signup', {
        email,
        password
    }).then(res => res)
);