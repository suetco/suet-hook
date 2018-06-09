require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , compression = require('compression')
    , app = express()

    , hook = require('./hook.js')
    ;

app.listen(process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.all('/', (req, res) => {
  return hook.handler(req, res);
});