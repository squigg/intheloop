var express = require('express');
var app = express();
var port = process.env.port || 1337
var router = express.Router();
var withMongo = require('./services/mongo.js').withMongo;

app.get('/', function (req, res) {
    res.send('Hello World!');
});


router.route('/transactions/:id/meta')

    .post(function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        withMongo((db) => {
            db.collection('transactionMeta').insertOne(req.body.meta, function (err, r) {
                res.end(JSON.stringify(r || {}, null, 2));
            });
        });

    })

    .get(function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        withMongo((db) => {
            db.collection('transactionMeta').find({'id': req.params.id}).toArray(function (err, data) {
                res.end(JSON.stringify(data || {}, null, 2));
            });
        });

    });


router.route('/transactions/:id/receipt')

    .post(function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        withMongo((db) => {
            db.collection('transactionReceipt').insertOne(req.body.meta, function (err, r) {
                res.end(JSON.stringify(r || {}, null, 2));
            });
        });

    })

    .get(function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        withMongo((db) => {
            db.collection('transactionReceipt').find({'id': req.params.id}).toArray(function (err, data) {
                res.end(JSON.stringify(data || {}, null, 2));
            });
        });

    });

app.use('/api', router);

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

