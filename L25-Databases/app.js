const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const customers = require('./schema/customer');
const order = require('./schema/order');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/orders', async (req, res) => {
    const {productName, price, customerId} = req.body;
    let newOrder = await order.insertOne({
        productName,
        customerId,
        price
    })
    res.status(200).json({
        message: 'Order Created Successfully',
        newOrder
    })
})

app.post('/customer', async (req, res) => {
    const {name, email} = req.body;
    console.log(name, email);
    let newCustomer = await customers.insertOne({
        name,
        email
    })

    res.status(200).json({
        message: 'Customer Created Successfully',
        newCustomer
    })
})

app.get('/orders', async (req, res) => {
    const {customerId} = req.query;
    let orderData = await order.find({
        customerId
    }).populate({
        path: 'customerId',
        select : 'name'
    })

    res.send(orderData);
})
// app.get('/customer', (req, res) => { })


mongoose.connect('mongodb://localhost:27017/myDB')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
