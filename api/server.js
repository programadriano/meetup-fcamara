var os = require('os');

var express = require('express')
var app = express()
var count = 1;

app.get('/', function (req, res) {
  res.status(200).send({
    total: count++,
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch()
  });
})

app.listen(3000, function () {
  console.log(`app listening on port ${3000}`)
})