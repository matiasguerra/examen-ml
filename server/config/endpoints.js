const endpoints = {
    searchItems: `https://api.mercadolibre.com/sites/MLA/search?q=:query`,
    getItemById: `https://api.mercadolibre.com/items/:id`,
    getItemDescription: `https://api.mercadolibre.com/items/:id/description`,
    getCurrency: `https://api.mercadolibre.com/currencies/:currency`
};

module.exports = endpoints;
