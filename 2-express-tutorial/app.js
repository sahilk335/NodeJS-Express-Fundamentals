const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<H1> Head</H1>')
    res.end();
});


server.listen(5000);