var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    if (req.url == '/'){
        let error = fs.renameSync('demo.txt', 'newDemo.txt');
        if(error){
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write('File Rename Failed');
            res.end();
        }else{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write('File Rename Success');
            res.end();
        }
    }
})
server.listen(4040);
console.log('Server Run Success');