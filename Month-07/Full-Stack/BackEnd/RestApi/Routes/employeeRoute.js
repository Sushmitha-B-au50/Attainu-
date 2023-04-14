const express =  require ('express');
const router  = express.Router();
const Employee =  require('../models/employee');


router.get('/',async(req,res,next)=> {
    try{
    const result = await Employee.find();     
    res.send(result);
    }
    catch(err){
        return res.status(500).json({
                     error:err
     })
     }
    });


router.post('/',async (req,res,next)=> {
    try{
        const employee =  new Employee({
        name : req.body.Name,
        employee_Id :req.body.EmployeeId,
        position :req.body.Position,
        salary : req.body.Salary,
    });
    const result = await employee.save();
    return res.send("employee added succesfully " + result);

}
catch(err){
   return res.status(500).json({
                error:err
})
}
});

        
    
router.put('/:id',async (req,res,next)=> {
    try{
    const employeeToUpdate = await Employee.findOneAndUpdate({"employee_Id":req.params.id})
 
    if(!employeeToUpdate){
        res.send("Employee not found");
        return;
    }

    employeeToUpdate.name = req.body.EmployeeName,
    employeeToUpdate.employee_Id =req.params.id,
    employeeToUpdate.position =req.body.Position,
    employeeToUpdate.salary = req.body.Salary
  
 const res = await employeeToUpdate.save()
 return res.send("updated successfully" + employeeToUpdate);
}
catch(err){
    return res.status(500).json({
                 error:err
 })
}
});

router.delete('/:id',async (req,res,next)=> {
    try{
   const res = await Employee.deleteOne({"employee_Id":req.params.id})
    return res.send("deleted successfully" );
    }

    catch(err){
        return res.status(500).json({
                        error:err
        })
    }
});


router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });



module.exports = router;