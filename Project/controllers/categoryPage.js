const Category = require('../db/models/category');

module.exports = async (req, res) => {
    try {
        const Category = await Category.find().lean();
        res.render('category', { categories });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
