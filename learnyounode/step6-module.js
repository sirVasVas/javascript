
module.exports = function(dirName, ext, callback){
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dirName,function(err, context){
    var rez = [];
    if (err) {
      return callback(err,null);
    }
    else {
      if (context) {
        for (var i = 0; i < context.length; i++) {
          if(path.extname(context[i]) == ('.'+ext)){
            rez.push(context[i]);
          }
        }
      }
      callback(null, rez);
    }
  });
};
