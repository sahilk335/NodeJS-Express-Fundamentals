const express = require('express');

const { products } = require('./data')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>');
});

app.get('/api/products/:productId', (req, res) => {

    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    res.json(singleProduct);
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});