'use strict';
require ('../services/mongo');

exports.createTransactionMeta = function(args, res, next) {

    res.setHeader('Content-Type', 'application/json');
    withMongo((db) => {
        db.collection('transactionMeta').insertOne(args.meta, function (err, r) {
            res.end(JSON.stringify(r || {}, null, 2));
        });
    });
}

exports.createTransactionReceipt = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * ocpApimSubscriptionKey (String)
  * receipt (TransactionReceipt)
  **/
    var examples = {};
  examples['application/json'] = {
  "amount" : "aeiou",
  "message" : "aeiou",
  "receipt_id" : "aeiou",
  "retailer" : "aeiou",
  "receipt_items" : [ {
    "item_image" : "aeiou",
    "item_price" : "",
    "item_id" : "aeiou",
    "item_description" : "aeiou",
    "item_url" : "aeiou"
  } ],
  "discount" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getAccountTransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * offset (String)
  * limit (String)
  * sortOrder (String)
  * fields (String)
  * filter (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getTransactionMeta = function(args, res, next) {

    res.setHeader('Content-Type', 'application/json');
    withMongo((db) => {
        db.collection('transactionMeta').find({'transaction_id': args.id}).toArray(function (err, data) {
            res.end(JSON.stringify(data || {}, null, 2));
        });
    });

}

exports.getTransactionReceipt = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "amount" : "aeiou",
  "message" : "aeiou",
  "receipt_id" : "aeiou",
  "retailer" : "aeiou",
  "receipt_items" : [ {
    "item_image" : "aeiou",
    "item_price" : "aeiou",
    "item_id" : "aeiou",
    "item_description" : "aeiou",
    "item_url" : "aeiou"
  } ],
  "discount" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.updateTransactionMeta = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * ocpApimSubscriptionKey (String)
  * meta (TransactionMeta)
  **/
    var examples = {};
  examples['application/json'] = {
  "tags" : [ "aeiou" ],
  "comment" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

