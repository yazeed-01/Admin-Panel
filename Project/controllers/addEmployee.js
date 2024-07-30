const Employees = require('../db/models/Employees');

async function generateUniqueEmployeeID() {
    // Get the count of existing employees
    const count = await Employees.countDocuments();

    // Generate the new EmployeeID based on the count (start from 1, so add 1 to the count)
    const newEmployeeID = count + 1;

    return newEmployeeID;
}

module.exports = async (req, res) => {
    try {
        // Generate a new EmployeeID
        const uniqueEmployeeID = await generateUniqueEmployeeID();

        // Add the generated EmployeeID to the employee data
        const employeeData = { ...req.body, EmployeeID: uniqueEmployeeID };

        // Create the employee with the unique EmployeeID
        await Employees.create(employeeData);

        // Redirect to the employees page
        res.redirect('/employees');
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).send('Internal Server Error');
    }
};
