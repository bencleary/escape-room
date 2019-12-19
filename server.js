var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname + '/dist/static/')))
app.use('/assets', express.static(path.join(__dirname + '/dist/assets/')))
app.use('/sounds', express.static(path.join(__dirname + '/dist/sounds/')))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/decrypted', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/decrypted/index.html'));
});

app.listen(8080);