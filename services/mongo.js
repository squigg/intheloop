import config from '../../lib/config';
var mongo = require('mongodb').MongoClient;

export function withMongo(callback) {
    var url = 'mongodb://' + config.mongo.url + ':' + config.mongo.port + '/' + config.mongo.db;
    mongo.connect(url, function (err, db) {
        callback(db);
        db.close();
    });
}
