const Db = require('mongodb').Db;
const Server = require('mongodb').Server;
const server = new Server('mongodb://localhost', 27017)
const db = new Db('shop', server);

const Users = {
    create(db, data) {
        const { email, password } = data;
    }
}

module.exports = Users;