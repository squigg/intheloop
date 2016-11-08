'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.createTransactionMeta = function createTransactionMeta (req, res, next) {
  Default.createTransactionMeta(req.swagger.params, res, next);
};

module.exports.createTransactionReceipt = function createTransactionReceipt (req, res, next) {
  Default.createTransactionReceipt(req.swagger.params, res, next);
};

module.exports.getAccountTransactions = function getAccountTransactions (req, res, next) {
  Default.getAccountTransactions(req.swagger.params, res, next);
};

module.exports.getTransactionMeta = function getTransactionMeta (req, res, next) {
  Default.getTransactionMeta(req.swagger.params, res, next);
};

module.exports.getTransactionReceipt = function getTransactionReceipt (req, res, next) {
  Default.getTransactionReceipt(req.swagger.params, res, next);
};

module.exports.updateTransactionMeta = function updateTransactionMeta (req, res, next) {
  Default.updateTransactionMeta(req.swagger.params, res, next);
};
