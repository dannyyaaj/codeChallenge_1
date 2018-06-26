let express = require('express');

let app = express(); // Makes a server
const PORT = 5000;

// Respond with assets
app.use(express.static('server/public'));

// Allow for incoming Request
app.listen(PORT, function () {
  console.log('App is running on ', PORT);
})