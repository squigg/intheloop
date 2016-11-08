var mongo = require('mongodb').MongoClient;

const mongoConfig = { url: 'localhost', port: '27017', db: 'intheloop'};

exports.withMongo = function (callback) {
    var url = 'mongodb://' + mongoConfig.url + ':' + mongoConfig.port + '/' + mongoConfig.db;
    mongo.connect(url, function (err, db) {
        callback(db);
        db.close();
    });
}
