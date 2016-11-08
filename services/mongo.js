/**
 * Created by squigg on 08/11/16.
 */
const mongo = require("mongodb").MongoClient;
const mongoConnect = process.env.mongoConnect || "mongodb://localhost:27017/intheloop";

exports.withMongo = function (callback) {
    mongo.connect(mongoConnect, function (err, db) {
        callback(db);
        db.close();
    });
}
