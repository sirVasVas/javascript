var http = require('http');
if (process.argv.length < 3) {
  return;
}
 http.get(process.argv[2],function(response){
   response.on("data", function(data){
     var str = data.toString().split('\n');
     str.forEach(function(line){console.log(line);})
   })
   response.on("error",console.error());
 });
