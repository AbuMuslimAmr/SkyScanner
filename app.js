//var app = express();
//var dir =  process.cwd();
//app.use(express.static(dir)); //current working directory
//app.use(express.static(__dirname)); //module directory
//var server = http.createServer(app);

var express = require('express'),
  dir =  process.cwd(),
  app = express();

var conf = {
  port: 8888
};

// index
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.get('/browse', require('./server/browser')(dir));

var server = app.listen(conf.port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App is up and running on http://%s:%s', host, port);
});
