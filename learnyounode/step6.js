var my = require('./step6-module.js');
if (process.argv.length < 4 ) {
  return;
}
my(process.argv[2],process.argv[3],function(err,files){
  if (err) {
    return;
  }
  if (files) {
    files.forEach(function(file){console.log(file);})
  }
});
