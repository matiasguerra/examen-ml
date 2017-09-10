const axios = require('axios');
const config = require('../../config');
const uriParser = require('../utils/uri-parser');

class ItemsService {
    async getItemById(id) {
        const url = uriParser(config.endpoints.getItemById, {id});
        const response = await axios.get(url);

        const data = response.data;

        let item = this._buildItem(data);
        item.sold_quantity = data.sold_quantity;
        item.description = await this.getItemDescription(item.id);
        item.picture = data.pictures[0].url;

        const currencies = await this.getCurrencies([item.price.currency]);
        this._inflateCurrencies(currencies, [item]);

        return {
            author: {
                id: data.seller_id
            },
            item: item
        };
    }

    async searchItems(query) {
        const url = uriParser(config.endpoints.searchItems, {query});
        const response = await axios.get(url);

        let items = [];
        let categories = new Set();
        let currencyCodes = new Set();

        const results = response.data.results;

        results.map((result) => {
            let item = this._buildItem(result);
            item.picture = result.thumbnail;
            items.push(item);

            categories.add(result.category_id);
            currencyCodes.add(result.currency_id);
        });

        const currencies = await this.getCurrencies(Array.from(currencyCodes));
        this._inflateCurrencies(currencies, items);

        return {
            categories: Array.from(categories),
            items: items
        };
    }

    _buildItem(response) {
        return {
            id: response.id,
            title: response.title,
            price: {
                currency: response.currency_id,
                amount: response.price
            },
            condition: response.condition,
            free_shipping: response.shipping && response.shipping.free_shipping
        };
    }

    async getItemDescription(id) {
        const url = uriParser(config.endpoints.getItemDescription, {id});
        const response = await axios.get(url);

        return response.data.plain_text;
    }

    getCurrencies(currencies) {
        const currenciesPromises = currencies.map((currency) => this._getCurrency(currency));
        return Promise.all(currenciesPromises);
    }

    async _getCurrency(currency) {
        const url = uriParser(config.endpoints.getCurrency, {currency});
        const response = await axios.get(url);

        return response.data;
    }

    _inflateCurrencies(currencies, items) {
        return items.map((item) => {
            item.price.symbol = currencies.find((currency) => {
                return currency.id === item.price.currency;
            }).symbol;

            return item;
        });
    }
}

module.exports = ItemsService;
