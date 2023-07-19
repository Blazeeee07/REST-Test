const express = require('express');
const router = express.Router();
const bodyParser =require('body-parser');
const Product=require("../Models/Product.model")
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/',(req,res,next)=>{
        res.send("Hello from the router");
})

router.post('/',async (req,res)=>{


  try{  
    const product =new Product(req.body);
    const result =await product.save()
    res.send(result)
  } catch(error){
    console.log(error.message);
  }
    //  console.log(req.body);
    //  const product = new Product({
    //      name: req.body.name,
    //      price: req.body.price,
    //    });
     
    //    product
    //    .save()
    //      .then((result) => {
    //        console.log(result);
    //        res.send(result);
    //      })
    //      .catch((err) => {
    //        console.error(err.message);
    //        res.status(500).send('Error saving the product.');
    //      });
    //res.send("Router creates a post"); 
});

router.get('/:id', (req,res)=>{
       res.send("Router sends a single product");
})

router.patch('/:id', (req,res)=>{
    res.send("Router updates a single product");
})

router.delete('/:id', (req,res)=>{
    res.send("Router deletes a single product");    
})
module.exports = router;