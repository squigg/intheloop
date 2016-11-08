import express from 'express';
import transactions from '../services/transactions';

const router = express.Router();

/**
 * Get the meta data for a transaction
 */
router.get('/:id/meta', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  transactions.getTransactionMeta(options, (err, data) => {
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
 * Add meta data to a transaction
 */
router.post('/:id/meta', (req, res, next) => {
  const options = {
    id: req.params.id,
    meta: req.body.meta
  };

  transactions.createTransactionMeta(options, (err, data) => {
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
 * Update meta data for a transaction
 */
router.patch('/:id/meta', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  transactions.updateTransactionMeta(options, (err, data) => {
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
 * Get the receipt for a transaction
 */
router.get('/:id/receipt', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  transactions.getTransactionReceipt(options, (err, data) => {
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
 * Add a receipt to a transaction
 */
router.post('/:id/receipt', (req, res, next) => {
  const options = {
    id: req.params.id,
    receipt: req.body.receipt
  };

  transactions.createTransactionReceipt(options, (err, data) => {
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
