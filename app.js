var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('index.html');
}).listen(3000, "185.14.186.244");
console.log('Server running at http://185.14.186.244:3000/');