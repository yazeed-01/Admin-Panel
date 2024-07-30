const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClientsSchema = new Schema({
    ClientId: Number,
    FullName: String,
    email: String,
    phoneNumber: Number,
    });
    

const Clients = mongoose.model('Clients',ClientsSchema);
module.exports = Clients