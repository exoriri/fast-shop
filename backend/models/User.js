const bcrypt = require('bcrypt');

const databases = require('../databases');
const collection = databases.Mongo.db.collection('users');

// TODO make some function to handle all requests like promise
const findUser = (email) => {
    return new Promise(res => {
        collection.findOne({ email }, (err, user) => {
            if (err) {
                throw Error(err)
            };
            res(user);
        })
    })
};

const insertUser = (firstName, lastName, email, password) => {
    return new Promise(res => {
        collection.insertOne({ firstName, lastName, email, password }, (err, user) => {
            console.log(user)
            if (err) throw new Error(err);
            console.log('Document inserted');
            res(user);
        });
    })
}

const User = {
    async create({ firstName, lastName, email, password }) {
        const existingUser = await findUser(email);
    
        if (existingUser) return `User with email ${email} already exists`;
        return await insertUser(firstName, lastName, email, password);
    },

    find(email) {
        return findUser(email);
    },

    async isValidPassword(password, hash) {
       return await bcrypt.compare(password, hash); 
    }
}

module.exports = User;