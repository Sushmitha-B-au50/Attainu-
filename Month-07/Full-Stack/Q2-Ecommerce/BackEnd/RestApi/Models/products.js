const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/Test7", {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
)

//product collection 

const productSchema  = new mongoose.Schema(
    {
        id: Number,
        title: String,
        description :String,  
        price:Number,
    }
)

const product = new mongoose.model("products",productSchema);

module.exports = product;
