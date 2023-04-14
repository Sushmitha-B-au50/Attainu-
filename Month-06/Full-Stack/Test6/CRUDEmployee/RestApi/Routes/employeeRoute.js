
// 2. After creating the required models, create a REST API for TODO APP. Using the API, an
// end-user should be able to do all the CRUD operations(Add Employee, Edit Employee, Delete
// Employee, Get All Employee data, etc. (40 marks)
const express =  require ('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Employee =  require('../models/employee');



router.get('/',async(req,res,next)=> {
    try{
    const result = await Employee.find();     
    res.send(result);
    }
    catch{
        res.send('Error' + err);
    }
    });


router.post('/',async (req,res,next)=> {
        const employee =  new Employee({
        name : req.body.EmployeeName,
        employee_Id :req.body.EmployeeId,
        position :req.body.Position,
        salary : req.body.Salary,
    });
    await employee.save().then(result => {
        return res.send("employee added successfully" + employee);
    })
    .catch(err => {
      res.status(500).json({
        error:err
      });
    });
});

        
    
router.put('/:id',async (req,res,next)=> {
    const employeeToUpdate = await Employee.findOneAndUpdate({"employee_Id":req.params.id})
 
    if(!employeeToUpdate){
        res.send("Employee not found");
        return;
    }

    employeeToUpdate.name = req.body.EmployeeName,
    employeeToUpdate.employee_Id =req.params.id,
    employeeToUpdate.position =req.body.Position,
    employeeToUpdate.salary = req.body.Salary,
  
    await employeeToUpdate.save().then(result => {
        return res.send("updated successfully" + employeeToUpdate);
    })
    .catch(err => {
        res.status(500).json({
        error:err
        });
    });

});

router.delete('/:id',async (req,res,next)=> {
   await Employee.deleteOne({"employee_Id":req.params.id}).then(result => {
        return res.send("deleted successfully" );
    })
    .catch(err => {
        res.status(500).json({
        error:err
        });
    });
});

// 3. When the employee data is added has Health Insurance should always be false. Create a
// separate PUT route ‘/employee/:employeeId/update Insurance’ to change the value from false to
// true and vice-versa. (40 marks)

router.put('/:id/:updateInsurance',async (req,res,next)=> {
    const employeeToUpdate = await Employee.findOneAndUpdate({"employee_Id":req.params.id},{ "hasHealthInsurance": req.params.updateInsurance })
    try{
    if(!employeeToUpdate){
        res.send("Employee not found");
        return;
    }
    return res.send("insurance updated successfully");
   
} 
    catch{(err => {
        res.status(500).json({
        error:err
        });
    });
}

});


module.exports = router;