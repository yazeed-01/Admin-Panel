const Clients = require('../db/models/clients');

async function generateUniqueEmployeeID() {
    // Get the count of existing employees
    const count = await Clients.countDocuments();

    // Generate the new EmployeeID based on the count (start from 1, so add 1 to the count)
    const newEmployeeID = count + 1;

    return newEmployeeID;
}

module.exports = async (req, res) => {
    try {
        // Generate a new EmployeeID
        const uniqueEmployeeID = await generateUniqueEmployeeID();

        // Add the generated EmployeeID to the employee data
        const employeeData = { ...req.body, ClientId: Number(uniqueEmployeeID) };

        // Create the employee with the unique EmployeeID
        await Clients.create(employeeData);

        // Redirect to the employees page
        res.redirect('/clients');
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(500).send('Internal Server Error');
    }
};
