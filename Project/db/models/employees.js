const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const EmployeesSchema = new Schema({
    FullName: String,
    EmployeeID: Number,
    Email: String,
    Phone: Number,
    Position: String,
    DateOfHire: { type: Date, default: Date.now },
    Salary: Number,
    Bonus: Number,
    WorkHours: String,
    });
    

const Employees = mongoose.model('Employees',EmployeesSchema);
module.exports = Employees