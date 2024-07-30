const Employees = require('../db/models/Employees');

module.exports = async (req, res) => {
    try {
        const employees = await Employees.find().lean();
        res.render('employees', { employees });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
