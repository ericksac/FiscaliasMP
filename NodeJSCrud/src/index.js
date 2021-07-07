const app = require('./server/config');

const http = require('http').Server(app);


const db = require("../src/models");
db.sequelize.sync();

// Starting the server
const server = http.listen(app.get('port'), () => {
    console.log('Server on port 3000');
  });