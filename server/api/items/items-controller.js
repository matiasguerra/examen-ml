'use strict';

const ItemsService = require('./items-service');

class ItemsController {

    static async getItemById(req, res, next) {
        try {
            const id = req.params.id;
            const ItemsServiceInstance = new ItemsService();
            const item = await ItemsServiceInstance.getItemById(id);

            if (!item) {
                return res.sendStatus(404);
            }
            res.json(item);
        } catch (err) {
            next(err);
        }
    }

    static async searchItems(req, res, next) {
        try {
            const {q} = req.query;
            const ItemsServiceInstance = new ItemsService();
            const response = await ItemsServiceInstance.searchItems(q);

            if (!response.items.length) {
                return res.sendStatus(404);
            }
            res.json(response);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ItemsController;
