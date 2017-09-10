'use strict';
class AppController {
    static home(req, res, next) {
        res.render('home', {});
    }
}

module.exports = AppController;
