var fs = require('fs');
if (process.argv.length > 2) {
  var fileName = process.argv[2];
  fs.readFile(fileName,function(err, data){
    if (err) {
      return;
    }
    var str= data.toString().split('\n');
    console.log(str.length-1);
  })

}
