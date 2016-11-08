'use strict';

exports.createAccountPayment = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  * paymentRequest (PaymentRequest)
  **/
    var examples = {};
  examples['application/json'] = {
  "OTPCode" : "aeiou",
  "paymentAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "toSortCode" : "aeiou",
  "paymentId" : "aeiou",
  "paymentReference" : "aeiou",
  "toAccountNumber" : "aeiou",
  "paymentStatus" : "aeiou",
  "callbackUri" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.createTransactionMeta = function(args, res, next) {
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

exports.getAccount = function(args, res, next) {
  /**
   * parameters expect
ed in the args:
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "accountNumber" : "aeiou",
  "accountBalance" : 1.3579000000000001069366817318950779736042022705078125,
  "accountCurrency" : "aeiou",
  "accountType" : "aeiou",
  "sortCode" : "aeiou",
  "accountFriendlyName" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getAccountPayment = function(args, res, next) {
  /**
   * parameters expected in the args:
  * paymentId (String)
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "OTPCode" : "aeiou",
  "paymentAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "toSortCode" : "aeiou",
  "paymentId" : "aeiou",
  "paymentReference" : "aeiou",
  "toAccountNumber" : "aeiou",
  "paymentStatus" : "aeiou",
  "callbackUri" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getAccountPayments = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * limit (String)
  * offset (String)
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

exports.getCustomer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "mobilePhone" : "aeiou",
  "county" : "aeiou",
  "postCode" : "aeiou",
  "familyName" : "aeiou",
  "address1" : "aeiou",
  "address2" : "aeiou",
  "town" : "aeiou",
  "givenName" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getCustomerAccounts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
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

exports.getCustomers = function(args, res, next) {
  /**
   * parameters expected in the args:
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
  /**
   * parameters expected in the args:
  * id (String)
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

exports.updateAccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  * body (Body)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateAccountPayment = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * paymentId (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  * patchPayment (PatchPayment)
  **/
    var examples = {};
  examples['application/json'] = {
  "OTPCode" : "aeiou",
  "paymentAmount" : 1.3579000000000001069366817318950779736042022705078125,
  "toSortCode" : "aeiou",
  "paymentId" : "aeiou",
  "paymentReference" : "aeiou",
  "toAccountNumber" : "aeiou",
  "paymentStatus" : "aeiou",
  "callbackUri" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.updateCustomer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * subscriptionKey (String)
  * ocpApimSubscriptionKey (String)
  * body (Body)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "mobilePhone" : "aeiou",
  "county" : "aeiou",
  "postCode" : "aeiou",
  "familyName" : "aeiou",
  "address1" : "aeiou",
  "address2" : "aeiou",
  "town" : "aeiou",
  "givenName" : "aeiou"
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

