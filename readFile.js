var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        // Async
        // fs.readFile('home.html',function(error,data){
        //     res.writeHead(200, {"Content-type": 'text/html'});
        //     res.write(data);
        //     res.end()
        // });

       let myData= fs.readFileSync("home.html");
        res.writeHead(200, { "Content-type": 'text/html' });

        res.write(myData);
        res.end();
    }

});

server.listen(4040);
console.log('Server Run success');

