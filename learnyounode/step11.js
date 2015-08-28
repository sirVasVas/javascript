var fs = require('fs');
var http = require('http');
if (process.argv.length < 4) {
  return;
}
var fileToSend = process.argv[3];
//console.log(fileToSend);
//console.log('port=' +process.argv[2]);

var myserver = http.createServer(function(request, response){
  //console.log('client connect');
  var src = fs.createReadStream(fileToSend);
  src.pipe(response);
});
//console.log('myserver='+myserver);
myserver.listen(process.argv[2]);
/*
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))


*/
