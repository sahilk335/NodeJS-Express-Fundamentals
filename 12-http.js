const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home page');
    } else if (req.url === '/about') {
        res.end('Welcome to about page');
    }
    res.end(`
<h1> oops!</h1>
<p> We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
`)
});

server.listen(5000);