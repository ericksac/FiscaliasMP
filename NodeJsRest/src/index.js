const app = require('./server/config');

const http = require('http').Server(app);

// Starting the server
var server = http.listen(app.get('port'), () => {
    console.log('Server on port 3000');
  });