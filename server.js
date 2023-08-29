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
// style="color: salmon; font-family: Avenir;"
// Greeting: Step 1
  app.get('/greetings', function(req, res) {
    res.send('<h1>Hello, stranger.</h1>');
});


// Greeting: Step 2
app.get('/greetings/:name', function(req, res) {
    res.send(`<Name>Hello, ${req.params.name}! It is so great to see you.</Name>`);
});


// NOTES
/*  
/tip/:total/:tipPercentage
Parameters that come from the browser are STILL STRINGS
Have to convert to a number
*/

// Tip Calculator: 
app.get('/tip', function(req, res) {
    res.send(`<h1>How was your meal?</h1>`);
})
app.get('/tip/:total/:tipPercentage', function(req, res) {
    // Create variables and convert strings to numbers
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    // res.send(`Your total amount is: ${total}`);
    res.send(`<h1>Your tip amount is: ${tipAmount}</h1>`);
});

// app.get('/tip/:tipPercentage', function(req, res) {
//     res.send(`<h1>Your tip was $${req.params.tipPercentage}</h1>`)
// })


// EightBall Array: Random Response
app.get('/magic', function(req, res) {
    // Create responses array
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    // BIG UPS STEFON! (literally the last minute of our breakout rooms!)
    let randomResponse = responses[Math.floor(Math.random()*responses.length)]

    res.send(`<h1>Will I be a Millionaire? <br> Magic Eight Ball Says: "${randomResponse}"</h1>`);
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

// FROM LECTURE: FOR REFACTOR
/* 
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});
*/

// NOTES: ACCESSING/PRINTING PARAM
/* 
From Josh
app.get('/item/:id', (req, res) => {
  res.send("This route's id parameter " + req.params.id);
});
*/