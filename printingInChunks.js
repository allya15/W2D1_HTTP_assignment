function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data.concat('\n'));
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

console.log(getAndPrintHTMLChunks());
