const express =require("express");
const mongoose = require('mongoose');


const app=express();

mongoose.connect('mongodb://localhost:27017/RestAPI_youtube')
.then(()=>{
    console.log('Mongodb connected...');
})



const productRoute= require('./Routes/Product.route')
app.use('/products', productRoute);

app.use((req,res,next)=>{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});
/*app.get('/products',(req,res)=>{
    
})*/

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000...");
})