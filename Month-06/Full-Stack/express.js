
// 1. Based on the above sample schema, create a Mongoose Schema and Model. (20 marks)


const bodyParser = require('body-parser');
const employeesRoutes = require('./RestApi/Routes/employeeRoute');

const express =  require ('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/employee',employeesRoutes);




app.get('/', (req, res,next) => {
    res.send("Hello");
})





app.listen(8000, () => {
    console.log("Listening on the port 8000");
})