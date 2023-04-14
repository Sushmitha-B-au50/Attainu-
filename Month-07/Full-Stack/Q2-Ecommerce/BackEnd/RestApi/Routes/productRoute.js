const express =  require ('express');
const router  = express.Router();
const Product =  require('../models/products');

router.get('/',async(req,res,next)=> {
    try{
    const result = await Product.find();     
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
        const product =  new Product({
        id : req.body.id,
        title :req.body.title,
        description :req.body.description,
        price:req.body.price
    });
    const result = await product.save();
    return res.send("product added succesfully " + result);

}
catch(err){
   return res.status(500).json({
                error:err
})
}
});

        

router.delete('/:id',async (req,res,next)=> {
    try{
   const res = await Product.deleteOne({"id":req.params.id})
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