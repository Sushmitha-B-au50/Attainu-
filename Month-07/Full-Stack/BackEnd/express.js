
const express =  require ('express');
const bodyParser = require('body-parser');
const employeesRoutes = require('./RestApi/Routes/employeeRoute');
const cors = require('cors');
const app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// const jsonParser = bodyParser.json();

// app.use(jsonParser);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/employee',employeesRoutes);



app.get('/', (req, res,next) => {
    res.send("Hello");
})


app.listen(8001, () => {
    console.log("Listening on the port 8001");
})