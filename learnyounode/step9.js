var http = require('http');
var bl = require('bl');
if (process.argv.length < 3) {
  console.log('error of url count');
  return;
}
var urlCount = process.argv.length-2;
var result = new Array();
//console.log(result);
var pr = function(index){
  //console.log(index);
  return function(response) {
    response.pipe(bl(function(err,data){
      /*console.log("responce from " + index);
      console.log(data);
      console.log(result);*/
      if (err) {
        return console.error(err);
      }
      result[index] = data.toString();
      urlCount--;
      if (urlCount ===0) {
        result.forEach(function(rez){console.log(rez);});
      }
    }))
  }
}
for (var i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i],pr(i));
}
/*=====================================*/
/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
  */
