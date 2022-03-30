const express = require('express');

const clientIdentity = require('./src/controllers/ClientIdentityController');

const routes = express.Router();


routes.get('/clientidentity', clientIdentity.listAll);
routes.get('/clientidentity/list', clientIdentity.list);
routes.post('/clientidentity', clientIdentity.create);
routes.put('/clientidentity', clientIdentity.update);
routes.delete('/clientidentity/:code', clientIdentity.delete);


module.exports = routes;