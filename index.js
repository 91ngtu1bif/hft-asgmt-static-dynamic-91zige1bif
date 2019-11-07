const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');

// GET Requests vgl. PHP $_GET, aber auch eben auch im Browser localhost:3000
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// POST Requests vgl. PHP $_POST
app.post('/', function (req, res) {
  res.send('Got a POST request')
})