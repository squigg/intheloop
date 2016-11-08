/**
 * @param {Object} options
 * @param {String} options.id The id of the transaction to get the meta data for
 * @param {Function} callback
 */
export function getTransactionMeta (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The transaction id to add the meta data to
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.meta Transaction Meta Data
 * @param {Function} callback
 */
export function createTransactionMeta (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The transaction id to update the meta data for
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.meta Transaction Meta Data
 * @param {Function} callback
 */
export function updateTransactionMeta (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The id of the transaction to get the receipt for
 * @param {Function} callback
 */
export function getTransactionReceipt (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The transaction id to add the receipt to
 * @param {String} options.Ocp-Apim-subscriptionKey subscription key in header
 * @param {Object} options.receipt Transaction Receipt Data
 * @param {Function} callback
 */
export function createTransactionReceipt (options, callback) {
  // Implement you business logic here...
}

