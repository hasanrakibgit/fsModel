var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
   if(req.url == '/'){
       let result = fs.existsSync('demo.txt');
           if(result){
               
               res.end('True');
           }else{
            
            res.end('False');
           }

      
   }

})
server.listen(4040);
console.log('Server Run Success');