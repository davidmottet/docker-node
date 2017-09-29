var http = require('http');

var app = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});
app.listen(80);

module.exports = app;
