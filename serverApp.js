/*Create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
** Bonus **

Generate the good / bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet!*/

var http = require ("http");

var PORTPLUS = 7000;
var PORTDOWNER = 7500;

var good_Phrases = ["Superb", "You're the best", "You always do well", "Magnifico"]
var bad_Phrases = ["Horrible", "How could you think that was acceptable?", "Awful"]

function getRandomItem = function(count) {
  return Math.floor(Math.random() * count);
}

var goodServer = http.createServer(function(req, res) {
  var num = getRandomItem(good_Phrases.count);
  res.end(good_Phrases[num]);
});

goodServer.listen(PORTPLUS, function(){
  console.log("server is listening at http://locahost:%s", PORTPLUS);
})

var badServer = http.createServer(function(req, res) {
  var num = getRandomItem(bad_Phrases.count);
  res.end(bad_Phrases[num]);
});

badServer.listen(PORTDOWNER, function(){
  console.log("server is listening at http://locahost:%s", PORTDOWNER);
})
// good_Phrases ["Superb", "You're the best", "You always do well", "Magnifico"]
// bad_Phrases ["Horrible", "How could you think that was acceptable?", "Awful"]

// http.createServer(onRequest_a).listen(7000);
//   return.good_Phrases;
// http.createServer(onRequest_b).listen(7500);
//   return.bad_Phrases;

// function on Request_a (req, res) {
//   res.write('Response from 7000' + random.good_phrases);
//   res.end();
// }

// function on Request_b (req, res) {
//   res.write('Response from 7500' + random.bad_phrases);
//   res.end();
// }

// var server = http.createServer(handleRequest);

// server.listen(PORTPLUS, function() {
//   console.log("Server is listening on: http://localhost:%s", PORTPLUS);

// server.listen(PORTDOWNER, function() {
//   console.log("Server is listening on: http://localhost:%s", PORTDOWNER);

// })
