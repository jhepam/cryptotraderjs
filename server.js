// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
const rp = require('request-promise');
var socketIO = require('socket.io');
var  port= process.env.PORT;

if (port == null || port == "") {
  port = 5000;
}

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/wallet', function(request, response) {
  response.sendFile(path.join(__dirname, 'wallet.html'));
});

server.listen(5000, function() {
  console.log('Starting server on port '+port);
});


io.on('connection', function(socket) {

  socket.on('getData', function() {
     const requestOptions = {
          method: 'GET',
          uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          qs: {
            'start': '1',
            'limit': '20',
            'convert': 'USD'
          },
          headers: {
            'X-CMC_PRO_API_KEY': '4760903f-877d-4613-89ee-88e9cccc7e5c'
          },
          json: true,
          gzip: true
        };

        rp(requestOptions).then(response => {
           io.sockets.emit('returnData', response)
        }).catch((err) => {
              io.sockets.emit('returnData', err.message)
        });
  });
});




