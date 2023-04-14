
const express =  require ('express');
const bodyParser = require('body-parser');
const productRoutes = require('./RestApi/Routes/productRoute');
const cors = require('cors');
const app = express();
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const port = 8002;

app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/product',productRoutes);



app.get('/', (req, res,next) => {
    res.send("Hello");
})


app.listen(port, () => {
    console.log("Listening on the port 8002");
})