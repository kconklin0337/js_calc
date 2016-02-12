var express = require('express'),
    logger  = require('morgan')('dev'),
    server  = express();


server.use(logger);
server.use(express.static(__dirname+'/public'));

server.set('port', (procress.en.PORT || 8080)); //opens up communication to incomming ports

server.get('/', home);


server.listen(server.get('port'), listenCallback); //server go get the port and listen


function home(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
}

function listenCallback(){
  console.log('Now listening on '  +  server.get('port')); //console logs the incomming port number
}
