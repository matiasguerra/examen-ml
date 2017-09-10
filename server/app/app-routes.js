const Router = require('co-router');
const router = Router();
const app = require('./app-controller');

router.get('/*', app.home);

module.exports = router;
