/**
 * Created by squigg on 08/11/16.
 */
const mongo = require("mongodb").MongoClient;
const mongoConfig = {
    url: process.env.mongoServer || "localhost",
    port: process.env.mongoPort || "27017",
    db: process.env.mongoDB || "intheloop"};

exports.withMongo = function (callback) {
    var url = "mongodb://" + mongoConfig.url + ":" + mongoConfig.port + "/" + mongoConfig.db;
    mongo.connect(url, function (err, db) {
        console.log(err);
        callback(db);
        db.close();
    });
}
