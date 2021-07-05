var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
   if(req.url == '/'){
       fs.unlink('demo.txt', function(error){
           if(error){
               res.writeHead(200,{'Content-type': 'text/html'})
               res.write('File delete failed')
               res.end();
           }else{
            res.writeHead(200,{'Content-type': 'text/html'})
            res.write('File delete Success')
            res.end();
           }

       })
   }

})
server.listen(4040);
console.log('Server Run Success');