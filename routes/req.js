var express = require('express');
var router = express.Router();

const f = (method, s) => async (req, res) => {
  const status = Number(s) || Number(req.params.status) || 200
  const message = req.params.message || JSON.stringify({
    method,
    params: req.params,
    query: req.query,
    body: req.body,
  })
  res.status(status).end(message)
}

['get', 'post', 'put', 'delete'].forEach((method) => {
  router[method]('/', f(method, 200))
  router[method]('/:status', f(method))
  router[method]('/:status/:message', f(method))
})

module.exports = router
