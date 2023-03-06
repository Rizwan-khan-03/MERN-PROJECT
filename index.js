const express =require('express');
require('./db/config');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())


// apis
const Users= require('./db/Users');
const Product = require('./db/Product')


app.post("/register",async (req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send({payload:result,message:"SignUp Success",responseCode:200})
})
app.post("/login",async (req,res)=>{
    if(req.body.password && req.body.email){
        let user = await Users.findOne(req.body).select("-password");
        if(user){
            res.send({payload:user,message:"Login Success",responseCode:200})
        }else{
            res.send({payload:{},message:"No Data Found",responseCode:400})
        }
    }else {
        res.send({payload:{},message:"No Data Found",responseCode:400})
    }
});
// add product
app.post("/addproduct",async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send({payload:result,message:"Product Added",responseCode:200})
});
// add product list
app.get("/products",async(req,res)=>{
    let product = await Product.find();
    if(product.length > 0){
        res.send({payload:product,message:"ok",responseCode:200})
    }else{
        res.send({payload:{},message:"No Data Found",responseCode:400})
    }
});
// add delete product
app.delete("/product/:id",async (req,res)=>{
    let result = await Product.deleteOne({_id:req.params.id});
    res.send({payload:result,message:"Product Delete",responseCode:200})
});

// add get single product
app.get("/product/:id",async (req,res)=>{
    let product = await Product.findOne({_id:req.params.id});
    if(product){
        res.send({payload:product,message:"Product Exist",responseCode:200})
    }else{
        res.send({payload:{},message:"No Data Found",responseCode:400})
    }
    
});
// update product
app.put("/product/:id",async (req,res)=>{
    let product = await Product.updateOne({_id:req.params.id},{$set:req.body});
    if(product){
        res.send({payload:product,message:"Product Update",responseCode:200})
    }else{
        res.send({payload:{},message:"No Data Found",responseCode:400})
    }
});






app.listen(5000);
        