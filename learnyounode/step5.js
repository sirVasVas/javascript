var fs= require('fs');
var path = require('path');
if (process.argv.length > 3) {
  var dirName = process.argv[2];
  var ext = process.argv[3];
  fs.readdir(dirName,function(err, context){
    if (context) {
      for (var i = 0; i < context.length; i++) {
        if(path.extname(context[i]) == ('.'+ext)){
          console.log(context[i]);
        }
      }
    }
  });
}
