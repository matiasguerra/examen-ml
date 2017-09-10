const Router = require('co-router');
const router = Router();
const items = require('./items-controller');

//LIGHTS
router.get('/', items.searchItems);
router.get('/:id', items.getItemById);

module.exports = router;
