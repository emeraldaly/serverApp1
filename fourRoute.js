// Create a website with 4 routes:
// -Home
// -Favorite Food
// -Favorite Movies
// -Favorite CSS Frameworks

var http = require('http');
var PORT = 8080;
var url = require('url');
var fs = require('fs');

var handleRequest = function(req,res){
  var urlParts = url.parse(req, res);

  switch (urlParts.pathname){
  case "/home":
  fs(req, res);
  break;
  case "/favoriteFood":
  display_food(req, res);
  break;
  case "favoriteMovie":
  display_movieo(req, res);
  break;
  case "favoriteCSS":
  display_css(req, res);
  break;
  default:
  display_404(req, res);
  break;
}
}
var display_home = function(req, res) {
  fs.readFile("home-page.html", "uft8", function(err)) {
  if (err) {console.log(err)}
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
})
var display_movie = function(req, res) {
  fs.readFile("favoriteMovie.html", "uft8", function(err)) {
  if (err) {console.log(err)}
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
})
var display_css = function(req, res) {
  fs.readFile("favCSS.html", "uft8", function(err)) {
  if (err) {console.log(err)}
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
})
var display_food = function(req, res) {
  fs.readFile("favorite_food.html", "uft8", function(err)) {
  if (err) {console.log(err)}
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
})

var display_portfolio = function(req, res) {
    var myHTML = "<html><body>";
    myHTML += "<h1>Portfolio!</h1>";
    myHTML += "</body></html>";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(myHTML);
}

var display_404 = function(req, res){
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.write("<h1>Not found</h1>");
    res.end("This is not the page you are looking for");
}
}
}
}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server is listening at http://localhost:%s", PORT);
})