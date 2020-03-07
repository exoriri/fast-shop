const MongoClient = require('mongodb').MongoClient;

const Mongo = {};

const connectMongoDB = (url, dbName, cb) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw Error("Couldn't connect to DB server, check it");
        const db = client.db(dbName);
        Mongo.db = db;
        console.log(`Connected to db on ${url}`)
        cb(db);
    });
};

Mongo.connectMongoDB = connectMongoDB;

module.exports = {
    Mongo
};
