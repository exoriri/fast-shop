import axios from 'axios';

export const User = {
    signup(email, password) {
        return axios.post('/signup', {
            email,
            password
        }).then(res => res.data)
    }
};