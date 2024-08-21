const mongoose = require("mongoose");  // Corrected 'mongooose' to 'mongoose'

const EmployeeSchema = new mongoose.Schema({  // Corrected 'mongooose' to 'mongoose'
    name: String,
    email: String,
    password: String
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
