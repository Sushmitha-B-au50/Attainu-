const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/Test6", {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
)

//employee collection 

const employeeSchema  = new mongoose.Schema(
    {
        name: String,
        employee_Id: Number,
        position :String,  
        salary: Number,
        hasHealthInsurance:{ type: Boolean ,default: false}
    }
)

const employee = new mongoose.model("employees",employeeSchema);

module.exports = employee;
