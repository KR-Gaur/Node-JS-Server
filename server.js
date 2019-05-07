var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("received something...")
    res.write('<h1>Server <hr/> Server page <h1>')
    res.end();
})
server.listen(5000)