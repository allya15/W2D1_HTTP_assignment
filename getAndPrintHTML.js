function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {


      //use push to get data into empty variable
      console.log(data.slice.concat('\n'));
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

console.log(getAndPrintHTML());