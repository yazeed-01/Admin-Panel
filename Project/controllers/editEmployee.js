const Employee = require('../db/models/Employees');

module.exports = async (req, res) => {
    const { EmployeeId, FullName, Email, Phone, Position, DateOfHire, Salary, Bonus, WorkHours } = req.body;

    try {
        await Employee.findOneAndUpdate(
            { EmployeeID: EmployeeId }, // Custom field for finding the document
            { FullName, Email, Phone, Position, DateOfHire, Salary, Bonus, WorkHours },
            { new: true, runValidators: true } // Options to return the updated document and run validators
        );
        res.redirect('/employees');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating employee');
    }
};


