const Employee = require('../db/models/Employees');

module.exports = async (req, res) => {
    const { employeeId } = req.body; // Ensure the field name matches the form field

    if (!employeeId) {
        console.error('No Employee ID provided.');
        return res.redirect('/employees'); // Redirect back if no ID provided
    }

    try {
        // Find and delete the employee by ID
        const result = await Employee.findOneAndDelete({ EmployeeID: employeeId });

        if (!result) {
            console.error(`No employee found with ID: ${employeeId}`);
            // Optionally, show a message or handle the case where no employee was found
        }

        res.redirect('/employees'); // Redirect to the employees page after deletion
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.redirect('/employees'); // Redirect to the employees page in case of error
    }
};
