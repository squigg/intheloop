var express = require('express');
var app = express();
var port = process.env.port || 1337;
var withMongo = require('./services/mongo.js').withMongo;
var _ = require('lodash');
var bodyParser = require('body-parser');
var multer = require('multer');
var MulterAzureStorage = require('multer-azure-storage');
var upload = multer({
    storage: new MulterAzureStorage({
        azureStorageConnectionString: process.env.blobUrl || 'https://intheloopdb.blob.core.windows.net/',
        azureStorageAccessKey: process.env.blobKey || 'SuuN51o/IVCeg1elYOtH2GNW8L7djbe8S/JTGe0knm4ErydM8685tdJRe6ADDsqaKViIDPkvsGnr/HTAfCXTWg==',
        azureStorageAccount: process.env.blobAccount || 'intheloopdb',
        containerName: 'images',
        containerSecurity: 'blob'
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/api/transactions/:id/meta', upload.single('image'), function (req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    console.log(req.params);
    console.log(req.body);
    console.log(req.file);
    withMongo((db) => {
        db.collection('transactionMeta').insertOne(_.merge(req.body, {transaction_id: req.params.id, image: req.file.url}), function (err, r) {
            res.end(JSON.stringify(r || {}, null, 2));
        });
    });

});

app.get('/api/transactions/:id/meta', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    withMongo((db) => {
        db.collection('transactionMeta').find({'transaction_id': req.params.id}).toArray(function (err, data) {
            res.end(JSON.stringify(data || {}, null, 2));
        });
    });

});

app.post('/api/transactions/:id/receipt', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    withMongo((db) => {
        db.collection('transactionReceipt').insertOne(_.merge(req.body.receipt, {transaction_id: req.params.id}), function (err, r) {
            res.end(JSON.stringify(r || {}, null, 2));
        });
    });

});

app.get('/api/transactions/:id/receipt', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    withMongo((db) => {
        db.collection('transactionReceipt').find({'transaction_id': req.params.id}).toArray(function (err, data) {
            res.end(JSON.stringify(data || {}, null, 2));
        });
    });

});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

