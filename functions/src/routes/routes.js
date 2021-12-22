const { Router } = require('express');
const routes = Router();

const controller = require('../controllers/ItemController');

routes.post('/api/create', controller.createItem);
routes.get('/api/read/:item_id', controller.getItem);
routes.put('/api/update/:item_id', controller.updateItem);
routes.delete('/api/delete/:item_id', controller.deleteItem);


module.exports = routes;