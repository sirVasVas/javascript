var http=require('http');
var map = require('through2-map');
if (process.argv.length<3) {
  return console.log("it's needs 1 paramenter");
}
var myserver = http.createServer(function(req, res){
  req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

myserver.listen(process.argv[2]);
/*
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
