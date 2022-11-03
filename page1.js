console.log("my first node code");
var http = require ("http");

var book=["html","css","JS","Node JS","Mongo DB"];

http.createServer(function(req,res){
    res.write("<h1>Array and map()</h1>");
    book.map((item)=>{
        res.write("<p>" +item+ "</p>")
    })

    res.end("Thank You!!!");
}).listen(1111);