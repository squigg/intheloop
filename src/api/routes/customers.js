import express from 'express';
import customers from '../services/customers';

const router = express.Router();

/**
 * &lt;p&gt;This call will return a collection of Customer objects 
 * which the currently authenticated user is allowed to see. At 
 * present, the collection will return a single Customer 
 * object, but more complex scenarios in the future (e.g. 
 * delegation scenarios) could result in multiple objects being 
 * returned in the collection.&lt;/p&gt;&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/', (req, res, next) => {
  const options = {
    subscriptionKey: req.query.subscriptionKey,
  };

  customers.getCustomers(options, (err, data) => {
    if (err) {
      const err_response = { status: 401, message: 'Unauthorised - you are not authenticated' };
      return res.status(401).send(err_response);
      const err_response = { status: 500, message: 'Server error - problem at our end' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Use this call to return a specific Customer object, if you 
 * know the id. For example, if you have stored a list of valid 
 * id&#x27;s from a previous session, you can access Customer 
 * objects individually using this call.&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  customers.getCustomer(options, (err, data) => {
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
 * Use this call to update a specific Customer object, if you 
 * know the id. At present, the only property which it is 
 * possible to update is &#x27;mobilePhone&#x27;.&lt;/p&gt;&lt;p&gt;This operation is 
 * enabled to allow Second Factor Authentication scenarios for 
 * Payments. In a future release, this feature will be 
 * available in a customer portal and this PATCH operation will 
 * be removed from the public API. &lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.patch('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  customers.updateCustomer(options, (err, data) => {
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
 * Use this call to enumerate the list of accounts for the 
 * specified user. An id is your key into the 
 * &lt;code&gt;/accounts&lt;/code&gt; endpoint. &lt;p&gt;A collection of 
 * AccountSummary objects are returned. Full Account objects 
 * can be retrieved from the &lt;code&gt;/accounts/{id}&lt;/code&gt; 
 * endpoint.&lt;/p&gt;&lt;p&gt;Required headers: 
 * &lt;b&gt;Ocp-Apim-subscriptionKey&lt;/b&gt; &amp; &lt;b&gt;bearer&lt;/b&gt;&lt;/p&gt;
 */
router.get('/:id/accounts', (req, res, next) => {
  const options = {
    id: req.params.id,
    subscriptionKey: req.query.subscriptionKey,
  };

  customers.getCustomerAccounts(options, (err, data) => {
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
