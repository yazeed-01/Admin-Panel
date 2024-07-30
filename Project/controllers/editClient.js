const Client = require('../db/models/clients');

module.exports = async (req, res) => {
    const { ClientId, FullName, email, phoneNumber } = req.body;

    // Validate clientId
    if (isNaN(ClientId)) {
        return res.status(400).send('Invalid clientIds ss');
    }

    // Convert clientId to a number
    const numericClientId = Number(ClientId);

    console.log('ClientId being queried:', numericClientId); // Debugging output

    try {
        const result = await Client.findOneAndUpdate(
            { ClientId: numericClientId }, // Ensure clientId is a number
            { $set: { FullName, email, phoneNumber } },
            { new: true }
        );

        if (result) {
            res.redirect('/clients');
        } else {
            res.status(404).send('Client not found');
        }
    } catch (error) {
        console.error('Error updating client:', error.message); // Log the error message
        res.status(500).send(`Error updating client: ${error.message}`); // Send error message to client
    }
};
