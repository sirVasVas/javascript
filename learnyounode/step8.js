var http = require('http');
var bl = require('bl');
if (process.argv.length>2) {
  var url = process.argv[2];
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if (err) {
        return console.error(err);
      }
      var str = data.toString();
      console.log(str.length);
      console.log(str);
    }))
  })
}
