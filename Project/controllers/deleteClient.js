const Client = require('../db/models/clients');

module.exports = async (req, res) => {
    const { clientId } = req.body; // Ensure the field name matches the form field

    if (!clientId) {
        console.error('No client ID provided.');
        return res.redirect('/clients'); // Redirect back if no ID provided
    }

    try {
        const result = await Client.findOneAndDelete({ ClientId: clientId });

        if (!result) {
            console.error(`No client found with ID: ${clientId}`);
            // Optionally, show a message or handle the case where no employee was found
        }

        res.redirect('/clients'); // Redirect to the employees page after deletion
    } catch (error) {
        console.error('Error deleting client:', error);
        res.redirect('/clients'); // Redirect to the employees page in case of error
    }
};
