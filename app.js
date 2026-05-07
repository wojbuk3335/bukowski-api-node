const express=require("express");
const app=express();

const productsRoutes=require('./api/routes/products');
const ordersRoutes=require('./api/routes/orders');
const usersRoutes=require('./api/routes/users');

app.use('/products',productsRoutes);
app.use('/orders',ordersRoutes);
app.use('/users',usersRoutes);

module.exports=app;