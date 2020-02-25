const bcrypt = require('bcrypt');

const databases = require('../databases');
const collection = databases.Mongo.db.collection('users');

// TODO make some function to handle all requests like promise
const findUser = (email) => {
    return new Promise((res, rej) => {
        collection.findOne({ email }, (err, user) => {
            if (err) throw Error(err);
            res(user);
        })
    })
};

const insertUser = (email, password) => {
    return new Promise((res, rej) => {
        collection.insertOne({ email, password }, (err, user) => {
            if (err) throw new Error(err);
            console.log('Document inserted');
            res(user);
        });
    })
}

const User = {
    async create({ email, password }) {
        const existingUser = await findUser(email);
    
        if (existingUser) return `User with email ${email} already exists`;
        return await insertUser(email, password);
    },

    find(email) {
        return findUser(email);
    },

    async isValidPassword(password, hash) {
       return await bcrypt.compare(password, hash); 
    }
}

module.exports = User;