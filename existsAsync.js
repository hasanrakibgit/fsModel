var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
   if(req.url == '/'){
       fs.exists('demo.txt', function(result){

        if(result){
               
            res.end('File ase');
        }else{
         
         res.end('File nai');
        }

       });
           

      
   }

})
server.listen(4040);
console.log('Server Run Success');