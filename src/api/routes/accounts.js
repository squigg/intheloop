import express from 'express';
import accounts from '../services/accounts';

const router = express.Router();

/**
 * &lt;p&gt;This returns a full Account object for the given id - 
 * this provides more fields than the Summary Account object 
 * provided by the &lt;code&gt;/customer/{id}/accounts&lt;/code&gt; 
 * endpoint and also provides access to the 
 * &lt;code&gt;/accounts/{id}/transactions&lt;/code&gt; and the 
 * &lt;code&gt;/accounts/{id}/payments&lt;/code&gt; 
 * resources.&lt;/p&gt;&lt;p&gt;&lt;b&gt;&lt;i&gt;Note:&lt;/b&gt; By design, and in a 
 * departure from common REST practice, there is no 
 * &lt;code&gt;/accounts&lt;/code&gt; top-level endpoint in this API. This 
 * is because (in delegation scenarios) the collection of 
 * objects which would be returned would potentially include 
 * accounts belonging to more than one Customer.&lt;/p&gt;&lt;p&gt;If you 
 * want to enumerate all accounts for a Customer, you should 
 * first enumerate AccountSummary objects by calling 
 * &lt;code&gt;/customers/{id}/accounts&lt;/code&gt; and then call this API 
 * for each id to return the full Account 
 * objects.&lt;/i&gt;&lt;/p&gt;&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.getAccount(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * By design, only the accountFriendlyName can be updated by 
 * API. Other fields are reserved by the Bank and any changes 
 * to them will be ignored.&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.patch('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.updateAccount(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * &lt;p&gt;Query string parameters can be used to sort by one or 
 * more fields, to paginate results, to request a partial set 
 * of fields to be returned and to filter the rows returned by 
 * using a filter string.&lt;/p&gt;&lt;h5&gt;offset option&lt;/h5&gt;&lt;p&gt;The 
 * offset option is the zero-based index of the first record 
 * that you would like to receive. The default is 
 * 0.&lt;/p&gt;&lt;h5&gt;limit option&lt;/h5&gt;&lt;p&gt;The limit option is the 
 * maximum number of records that you would like to be 
 * returned. The default is 50.&lt;/p&gt;&lt;h5&gt;sortOrder 
 * option&lt;/h5&gt;&lt;p&gt;The sortOrder option is a comma-separated list 
 * of fields used to specify one or more levels of sorting of 
 * the returned  collection. To specify a reverse-sort, add a 
 * &#x27;-&#x27; sign to the field name.&lt;/p&gt;&lt;h5&gt;fields option&lt;/h5&gt;&lt;p&gt;The 
 * fields option allows you to request a partial set of fields 
 * to be returned, rather than the entire obect. The fields 
 * option expects a comma-separated list of field names from 
 * the returned object schema.&lt;/p&gt;&lt;h5&gt;filter option&lt;/h5&gt;&lt;p&gt;The 
 * filter option may specify the following 
 * predicates:&lt;ul&gt;&lt;li&gt;&#x27;gt&#x27; for &#x27;greater than&#x27;&lt;/li&gt;&lt;li&gt;&#x27;lt&#x27; for 
 * &#x27;less than&#x27;&lt;/li&gt;&lt;li&gt;&#x27;gte&#x27; for &#x27;greater than or equal 
 * to&#x27;&lt;/li&gt;&lt;li&gt;&#x27;lte&#x27; for &#x27;less than or equals to&#x27;&lt;/li&gt;&lt;li&gt;&#x27;eq&#x27; 
 * for equals&lt;/li&gt;&lt;li&gt;&#x27;ne&#x27; for &#x27;not equals&#x27;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt; 
 * Note that if multiple filter queries are specified then they 
 * are logically AND&#x27;ed together.&lt;/p&gt;&lt;h6&gt;Example 1&lt;/h6&gt;&lt;p&gt;To 
 * return all records for an account showing only the custom 
 * name and balance, sorted by the transaction date and 
 * time:&lt;/p&gt;&lt;p&gt;&lt;code&gt;/accounts/{id}/transactions?fields&#x3D;transactionDateTime,accountBalance&amp;sortOrder&#x3D;transactionDateTime&lt;/code&gt;&lt;/p&gt;&lt;h6&gt;Example 
 * 2&lt;/h6&gt;&lt;p&gt;To return the second page of 20 results for all 
 * records:&lt;/p&gt;&lt;p&gt;&lt;code&gt;/accounts/{id}/transactions?offset&#x3D;20&amp;limit&#x3D;20&lt;/code&gt;&lt;/p&gt;&lt;h6&gt;Example 
 * 3&lt;/h6&gt;&lt;p&gt;To return transactions greater than a particular 
 * value:&lt;/p&gt;&lt;p&gt;&lt;code&gt;/accounts/{id}/transactions?filter&#x3D;transactionAmount.gt.250&lt;/code&gt;&lt;/p&gt;&lt;p&gt;&lt;h6&gt;Example 
 * 4&lt;/h6&gt;&lt;/p&gt;&lt;p&gt;To perform a complex filter query, for example, 
 * all transactions before Jan 31st 2015 that have a 
 * transaction amount greater than 
 * 50:&lt;/p&gt;&lt;p&gt;&lt;code&gt;/accounts/{id}/transactions?filter&#x3D;transactionAmount.gt.50,transactionDate.lt.2015.01.31&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Required 
 * headers: &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id/transactions', (req, res, next) => {
  const options = {
    id: req.params.id,
    offset: req.query.offset,
    limit: req.query.limit,
    sortOrder: req.query.sortOrder,
    fields: req.query.fields,
    filter: req.query.filter,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.getAccountTransactions(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * &lt;p&gt;We maintain a collection of all currently &#x27;in progress&#x27; 
 * payments plus 28 days of &#x27;completed&#x27; payments.&lt;/p&gt;&lt;h5&gt;offset 
 * option&lt;/h5&gt;&lt;p&gt;The offset option is the zero-based index of 
 * the first record that you would like to receive. The default 
 * is 0.&lt;/p&gt;&lt;h5&gt;limit option&lt;/h5&gt;&lt;p&gt;The limit option is the 
 * maximum number of records that you would like to be 
 * returned. The default is 50.&lt;/p&gt;&lt;h5&gt;sortOrder 
 * option&lt;/h5&gt;&lt;p&gt;The sortOrder option is a comma-separated list 
 * of fields used to specify one or more levels of sorting of 
 * the returned  collection. To specify a reverse-sort, add a 
 * &#x27;-&#x27; sign to the field name.&lt;/p&gt;&lt;h5&gt;fields option&lt;/h5&gt;&lt;p&gt;The 
 * fields option allows you to request a partial set of fields 
 * to be returned, rather than the entire obect. The fields 
 * option expects a comma-separated list of field names from 
 * the returned object schema.&lt;/p&gt;&lt;h5&gt;filter option&lt;/h5&gt;&lt;p&gt;The 
 * filter option may specify the following 
 * predicates:&lt;ul&gt;&lt;li&gt;&#x27;gt&#x27; for &#x27;greater than&#x27;&lt;/li&gt;&lt;li&gt;&#x27;lt&#x27; for 
 * &#x27;less than&#x27;&lt;/li&gt;&lt;li&gt;&#x27;gte&#x27; for &#x27;greater than or equal 
 * to&#x27;&lt;/li&gt;&lt;li&gt;&#x27;lte&#x27; for &#x27;less than or equals to&#x27;&lt;/li&gt;&lt;li&gt;&#x27;eq&#x27; 
 * for equals&lt;/li&gt;&lt;li&gt;&#x27;ne&#x27; for &#x27;not equals&#x27;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt; 
 * Note that if multiple filter queries are specified then they 
 * are logically AND&#x27;ed together.&lt;/p&gt;&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id/payments', (req, res, next) => {
  const options = {
    id: req.params.id,
    limit: req.query.limit,
    offset: req.query.offset,
    sortOrder: req.query.sortOrder,
    fields: req.query.fields,
    filter: req.query.filter,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.getAccountPayments(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * &lt;p&gt;This method can be used to request a payment to be made 
 * from the  account specified in the &#x27;id&#x27; path parameter 
 * (source account) to another bank account (target account) 
 * that is specified in the message body.&lt;p&gt;Note the 
 * relationship between payments and transactions - each 
 * account has a collection of payments and a collection of 
 * transactions. To make a payment, you make a post to the 
 * payments collection to create a new payment request object. 
 * This object can be checked to see the progress of the 
 * payment through its own lifecycle.&lt;/p&gt;&lt;p&gt;If (and only if) 
 * that payment is successful, you will see a corresponding 
 * debit entry in the transactions list to indicate that the 
 * payment has settled and the money has actually 
 * moved.&lt;/p&gt;&lt;h6&gt;Types of payment&lt;/h6&gt;&lt;p&gt;The following payment 
 * types are possible in this release:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Transfers&lt;/b&gt; 
 * - if the destination account is owned by the same person who 
 * owns the source account, then this is a transfer. You must 
 * specify the target account with a sortcode/account number 
 * pair. On completion of the payment, a debit transaction will 
 * appear in the source account and a credit transaction will 
 * appear in the destination account.&lt;/li&gt;&lt;li&gt;&lt;b&gt;UK Faster 
 * Payments&lt;/b&gt; - if the destination is to another valid 
 * account with sortcode 839999, then this will be done as a 
 * (simulated) UK Faster Payment between two parties. You must 
 * specify the target account with  a sortcode/account number 
 * pair. On completion of the payment, a debit transaction will 
 * appear in the source account and a credit transaction will 
 * appear in the destination account.&lt;br/&gt;If the destination is 
 * to any sortcode other than 839999, then we will simulate an 
 * outbound payment to another institution by adding a debit 
 * transaction to the source account and by creating a General 
 * Ledger entry for our simulated bank that records the outward 
 * flow of this money. &lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Note that you do not have 
 * to do anything to specify the payment type in your request: 
 * we determine whether a payment is a transfer, an internal 
 * payment or a UK payment based upon the target account that 
 * you specify.&lt;/p&gt;&lt;h6&gt;Payment status&lt;/h6&gt;&lt;p&gt;There are two 
 * modes of operation provided which allow the status of a 
 * payment request to be checked:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Push&lt;/b&gt; - the 
 * caller provides a callback uri when making the payment and 
 * we call that uri with payment status update 
 * messages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Polling&lt;/b&gt; - if a callback uri is not 
 * specified, then we provide a statusUri in the response body 
 * which can be periodically called by the client application 
 * to check on payment status.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;Note that in a 
 * future release, there will potentially be a separate 
 * transaction covering any fees resulting from the payment and 
 * this will include a linking mechanism to allow a tie between 
 * the charge and the payment transaction for which the charge 
 * is levied to be easily determined&lt;/p&gt;&lt;h6&gt;Two Factor 
 * Authentication (2FA)&lt;/h6&gt;&lt;p&gt;Incoming European regulations 
 * (Payment Services Directive 2) will mandate the 
 * implementation of two-factor authentication for payments 
 * above a certain ceiling and we have modelled this from 
 * v0.6.x of this API.&lt;/p&gt;&lt;p&gt;If you make a payment below the 
 * 2FA &#x27;ceiling&#x27; of ï¿½30, then this is a single-stage process 
 * (provided that you have specified the payment object 
 * properly). Once you POST the payment object, it&#x27;s 
 * paymentStatus will immediately be set to 
 * &lt;code&gt;&#x27;paymentStatus&#x27;:&#x27;Pending&#x27;&lt;/code&gt;. You will receive a 
 * 200 status code, which is your notification that the payment 
 * is queued for processing. Under most circumstances, the 
 * payment will be picked up by our Payments Engine for 
 * processing within a few seconds&lt;/p&gt;&lt;p&gt;If you make a payment 
 * above the 2FA &#x27;ceiling&#x27;, then this is a two-stage process. 
 * Your paymentStatus will be set to an initial state of 
 * &lt;code&gt;&#x27;paymentStatus&#x27;:&#x27;2FA required&#x27;&lt;/code&gt; and you will 
 * receive a 401 status code.&lt;p&gt;This is your signal to prompt 
 * the user of your app to enter the 6-digit One Time Password 
 * (OTP) that we will send to their registered mobile number - 
 * see the PATCH Customer documentation to set this 
 * value.&lt;/p&gt;&lt;p&gt;Once the user has provided the OTP code, you 
 * must PATCH the payment object. This is the second and final 
 * stage of the 2FA payment process. Patching the object with 
 * the correct OTP will set the 
 * &lt;code&gt;&#x27;paymentStatus&#x27;:&#x27;Pending&#x27;&lt;/code&gt; and will initiate 
 * processing by our Payments Engine.&lt;/p&gt;&lt;p 
 * style&#x3D;&quot;color:red;&quot;&gt;&lt;b&gt;NOTE: At our India Hackathons, the SMS 
 * message will not be generated and the bypass-code &quot;123456&quot; 
 * should be used to PATCH the request.&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Required 
 * headers: &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.post('/:id/payments', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
    paymentRequest: req.body.paymentRequest
  };

  accounts.createAccountPayment(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: '&lt;b&gt;General meaning&lt;/b&gt; - Unauthorised - you are not authenticated&lt;br/&gt;If accompanied with a message body: &lt;code&gt;{&#x27;paymentStatus&#x27;:&#x27;2FA required&#x27;}&lt;/code&gt;, then this indicates that your payment requires 2FA and you should follow the above instructions relating to a payment above the 2FA ceiling' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * &lt;p&gt;In the case where the client does not provide a 
 * callbackUri for us to send push status updates you can 
 * instead directly query the paymentId to check the status of 
 * the payment.&lt;/p&gt;&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id/payments/{paymentId}', (req, res, next) => {
  const options = {
    paymentId: req.params.paymentId,
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.getAccountPayment(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * &lt;p&gt;This method is used to provide the One Time Password 
 * (OTP) code which is required to authorise a payment greater 
 * than the 2FA ceiling of Â£30.&lt;/p&gt;&lt;p&gt;In order to authorise 
 * the payment, you must PATCH the OTPCode attribute of the 
 * Payment object by passing a body in this 
 * form:&lt;/p&gt;&lt;p&gt;&lt;code&gt;{&#x27;OTPCode&#x27;:&#x27;xxxxxx}&lt;/code&gt;&lt;/p&gt;&lt;p 
 * style&#x3D;&quot;color:red;&quot;&gt;&lt;b&gt;NOTE: At our India Hackathons, the SMS 
 * message will not be generated and the bypass-code &quot;123456&quot; 
 * should be used to PATCH the request.&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Required 
 * headers: &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.patch('/:id/payments/{paymentId}', (req, res, next) => {
  const options = {
    id: req.params.id,
    paymentId: req.params.paymentId,
    subscriptionKey: req.query.subscriptionKey,
  };

  accounts.updateAccountPayment(options, (err, data) => {
    if (err) {
      const err_response = { status: 400, message: 'Bad request - check that you have provided all required parameters' };
      return res.status(400).send(err_response);
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 403, message: 'Forbidden - you do not have access to this resource' };
      return res.status(403).send(err_response);
      const err_response = { status: 404, message: 'Not found - the resource does not exist' };
      return res.status(404).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
