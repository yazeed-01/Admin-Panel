const Products = require('../db/models/products');

module.exports = async (req, res) => {
    try {
        const products = await Products.find().lean();
        res.render('product', { products });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};