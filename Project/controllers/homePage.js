// controllers/indexController.js
const Category = require('../db/models/category');
const Products = require('../db/models/products');
const Orders = require('../db/models/orders');
const Employees = require('../db/models/Employees');

module.exports = async (req, res) => {
    try {
        // Fetch counts from each model
        const employeeCount = await Employees.countDocuments(); // Count total employees
        const categoryCount = await Category.countDocuments(); // Count total categories
        const productCount = await Products.countDocuments(); // Count total products
        const orderCount = await Orders.countDocuments(); // Count total orders
        
        // Render the homepage view with the counts
        res.render('homePage', { 
            employeeCount, 
            categoryCount, 
            productCount, 
            orderCount 
        });
    } catch (error) {
        // Log the error and send a 500 status response
        console.error(error);
        res.status(500).send('An error occurred');
    }
};
