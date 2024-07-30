const Clients = require('../db/models/clients');

module.exports = async (req, res) => {
    try {
        const clients = await Clients.find().lean();
        res.render('clients', { clients });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
