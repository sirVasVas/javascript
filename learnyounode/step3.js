 if (process.argv.length > 2) {
   var fileName = process.argv[2];
   var fs = require('fs');
   var buffer = fs.readFileSync(fileName);
   var str = buffer.toString().split('\n');
   console.log(str.length-1);
 }
