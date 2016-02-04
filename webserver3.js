var http = require('http');

var PORT = 8080;

var server = http.createServer(function(req, res) {
  var method = req.method.toLowerCase();
  console.log("method", method);

  var requestData = '';
  req.on("data", function(msg) {
    requestData = msg;

});

server.listen(PORT, function() {
  console.log("server is listening at http://local.host:%s", PORT);
});
});