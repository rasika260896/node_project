var http = require("http"); //calling the http module from the node so that we can setup a server 
http.createServer(function(req,res){
var book=["html","css","JS","Node JS","Mongo DB","Python","java"];
var jsonData = JSON.stringify(book)
res.write(jsonData);
res.end();

}).listen(1111);
