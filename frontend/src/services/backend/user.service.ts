import axios from 'axios';

const url = process.env.NODE_ENV === 'development' ? 
    'http://127.0.0.1:3000/' : 'https://afternoon-inlet-00968.herokuapp.com/';

export const signup = ({firstName, lastName, email, password}) => (
    axios(
        {
            method: 'post', 
            url: `${url}signup`, 
            data: {
                firstName,
                lastName,
                email,
                password
            },
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then(res => res.data)
);

export const signin = ({ email, password }) => (
    axios(
        {
            method: 'post', 
            url: `${url}login`, 
            data: {
                email,
                password
            },
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then(res => res.data)
);
