const MongoClient = require('mongodb').MongoClient;

const connectDB = (url, dbName, cb) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw Error("Couldn't connect to DB server, check it");
        const db = client.db(dbName);
        console.log(`Connected to db on ${url}`)
        cb();
    });
};

module.exports = connectDB;