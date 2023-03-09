const express = require('express');
require('./db/config');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


/// users
const register = require('./APIS/UserApi/Register');
const login = require('./APIS/UserApi/Login');

// Product
const productList =require('./APIS/ProductApi/ProductListAll');
const addproduct = require('./APIS/ProductApi/AddProduct');
const deleteProduct =require('./APIS/ProductApi/DeleteProduct');
const singleProduct = require('./APIS/ProductApi/GetSingleProduct');
const updateProduct= require('./APIS/ProductApi/UpdateProduct');
const searchProdct = require('./APIS/ProductApi/SearchProduct');

app.post('/register', register); // resgister user
app.post("/login", login);//login user

app.post("/addproduct", addproduct);// add product

app.get("/products", productList);// get product list

app.delete("/product/:id",deleteProduct);//  delete product

app.get("/product/:id",singleProduct);//  get single product

app.put("/product/:id", updateProduct);// update product

app.get("/search/:key", searchProdct); // search product



app.listen(5000);
