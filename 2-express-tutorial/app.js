const express = require('express');

const app = new express();

let { people } = require('./data')

//static assets

app.use(express.static('./methods-public'));
app.use(express.urlencoded(
    {
        extended: false,
    }
))
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).json({
            success: true,
            msg: `Welcome ${name}`
        });
    }

    res.status(400).json({
        success: false,
        msg: `Welcome ${name}`
    });
});


app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});
