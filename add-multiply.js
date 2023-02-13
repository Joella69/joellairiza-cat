

var express = require('express');
var app = express();
var port = 3000;

app.get('/sum', (req, res) => {
  var numbers = req.query.numbers.split(',').map(Number);
  var sum = numbers.reduce((acc, cur) => acc + cur, 0);
  res.send({ sum });
});

app.get('/product', (req, res) => {
  var numbers = req.body.numbers;
  var result = 1;
  for (const number of numbers) {
    result *= number;
  }
  res.json({ result });
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
