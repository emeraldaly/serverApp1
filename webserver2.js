var http = require('http');
var PORT = 8080;
var url = require('url');

var handleRequest =function(req, res) {
  var urlParts = url.parse(req.url);

  switch(urlParts.pathname == "/") {
    case "/":
    res.end("you are on the homepage");
    break;
    case "/log_in":
    res.end("Thanks for creating a new account");
    break
    default:
    res.end("this is an error page. aka a 404 page does not exist");
    break;
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("server is listening at http://local.host:%s", PORT);
})