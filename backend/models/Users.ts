const database = require('../databases/database.ts');

console.log(database);

const Users = {
    create(db, data) {
        const { email, password } = data;
    }
}

module.exports = Users;