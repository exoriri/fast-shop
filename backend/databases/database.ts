/* Vendors */
const Db = require('mongodb').Db;
const Server = require('mongodb').Server;

/* App static configs */
const configs = require('../configs');
const { mongo: { hostname, port, DB_NAME } } = configs;

const server = new Server(hostname, port);

module.exports = new Db(DB_NAME, server);
