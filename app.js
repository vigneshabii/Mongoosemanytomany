const express=require('express');
const app=express();
const exhbs=require('express-handlebars');
const bodyParser=require('body-parser');
const dbo=require('./db');
const productModel=require('./models/productModel');
const orderModel=require('./models/orderModel');

app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:'main',extname:'.hbs'}));
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',async ()=>{
    
    let database=dbo.getDatabase();
    const orders=await orderModel.find({}).populate('products')
    console.log(orders);
})

app.listen(3500,(req,res)=>{
    console.log('Listening 3500')
})