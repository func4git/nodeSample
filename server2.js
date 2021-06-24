//import http from 'http';
var http = require('http');

var server = http.createServer();

server.addListener('request', function(request, response){
    console.log('requested.....');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello nodeJS Server2');
    response.end();
});

server.addListener('connection', function(socket){
    console.log('connected....');
});

server.listen(8080);
