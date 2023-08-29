// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// Mount routes
app.get('/', function(req, res) {
    res.send('<h1 style="color: navy; font-family: Avenir;">Express is Working!</h1>');
  });

// Define new routes
  app.get('/greetings', function(req, res) {
    res.send('<h1>Hello, stranger.</h1>');
});

// Step 2
app.get('/greetings/:name', function(req, res) {
    res.send('<Name>Hello, Jimmy Boy! It is so great to see you.</Name>');
});
// style="color: salmon; font-family: Avenir;"

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});