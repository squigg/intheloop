/**
 * @param {Object} options
 * @param {String} options.id The id to return
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Function} callback
 */
export function getAccount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The id to update
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.body 
 * @param {Function} callback
 */
export function updateAccount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The id to return transactions for
 * @param {String} options.offset The index (in the overall result set) of the first record to return in this request
 * @param {String} options.limit The number of records to return in this request
 * @param {String} options.sortOrder The (comma-separated, list of) sort field(s) to apply to this result set. Prefix with &#x27;-&#x27; to reverse sort
 * @param {String} options.fields The list of fields to return if a partial result is desired (default is to return all fields)
 * @param {String} options.filter Filter the returned list of transactions for {id}, returning only those which match the filter string
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Function} callback
 */
export function getAccountTransactions (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The id object from which fund will be debited
 * @param {String} options.limit The number of records to return in this request
 * @param {String} options.offset The index (in the overall result set) of the first record to return in this request
 * @param {String} options.sortOrder The (comma-separated, list of) sort field(s) to apply to this result set. Prefix with &#x27;-&#x27; to reverse sort
 * @param {String} options.fields The list of fields to return if a partial result is desired (default is to return all fields)
 * @param {String} options.filter Filter the returned list of transactions for {id}, returning only those which match the filter string
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Function} callback
 */
export function getAccountPayments (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The id to make a payment from
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.paymentRequest 
 * @param {Function} callback
 */
export function createAccountPayment (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.paymentId the unique paymentId for the payment to be checked
 * @param {String} options.id The id to make the payment from
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Function} callback
 */
export function getAccountPayment (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The account ID which the desired payment belongs to
 * @param {String} options.paymentId The id of the Payment to be authorised
 * @param {String} options.subscriptionKey subscription key in url
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.patchPayment 
 * @param {Function} callback
 */
export function updateAccountPayment (options, callback) {
  // Implement you business logic here...
}

