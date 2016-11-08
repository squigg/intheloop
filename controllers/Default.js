'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.createAccountPayment = function createAccountPayment (req, res, next) {
  Default.createAccountPayment(req.swagger.params, res, next);
};

module.exports.createTransactionMeta = function createTransactionMeta (req, res, next) {
  Default.createTransactionMeta(req.swagger.params, res, next);
};

module.exports.createTransactionReceipt = function createTransactionReceipt (req, res, next) {
  Default.createTransactionReceipt(req.swagger.params, res, next);
};

module.exports.getAccount = function getAccount (req, res, next) {
  Default.getAccount(req.swagger.params, res, next);
};

module.exports.getAccountPayment = function getAccountPayment (req, res, next) {
  Default.getAccountPayment(req.swagger.params, res, next);
};

module.exports.getAccountPayments = function getAccountPayments (req, res, next) {
  Default.getAccountPayments(req.swagger.params, res, next);
};

module.exports.getAccountTransactions = function getAccountTransactions (req, res, next) {
  Default.getAccountTransactions(req.swagger.params, res, next);
};

module.exports.getCustomer = function getCustomer (req, res, next) {
  Default.getCustomer(req.swagger.params, res, next);
};

module.exports.getCustomerAccounts = function getCustomerAccounts (req, res, next) {
  Default.getCustomerAccounts(req.swagger.params, res, next);
};

module.exports.getCustomers = function getCustomers (req, res, next) {
  Default.getCustomers(req.swagger.params, res, next);
};

module.exports.getTransactionMeta = function getTransactionMeta (req, res, next) {
  Default.getTransactionMeta(req.swagger.params, res, next);
};

module.exports.getTransactionReceipt = function getTransactionReceipt (req, res, next) {
  Default.getTransactionReceipt(req.swagger.params, res, next);
};

module.exports.updateAccount = function updateAccount (req, res, next) {
  Default.updateAccount(req.swagger.params, res, next);
};

module.exports.updateAccountPayment = function updateAccountPayment (req, res, next) {
  Default.updateAccountPayment(req.swagger.params, res, next);
};

module.exports.updateCustomer = function updateCustomer (req, res, next) {
  Default.updateCustomer(req.swagger.params, res, next);
};

module.exports.updateTransactionMeta = function updateTransactionMeta (req, res, next) {
  Default.updateTransactionMeta(req.swagger.params, res, next);
};
