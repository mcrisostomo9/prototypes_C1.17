
var http = require('http');

var server = http.createServer(function handleRequest(request, response){
  console.log('handling request');
  response.write('initialized response \n');
  response.end('Respnse received ' + request.url);
});

server.listen(8888, function () {
  console.log('server listening');
});
