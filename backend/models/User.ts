const User = {
    create({ email, password, db }) {
        const collection = db.collection('users');
        collection.insertOne({ email, password }, (err, res) => {
            if (err) throw new Error(err);
            console.log('Document inserted');
        });
    }
}

module.exports = User;