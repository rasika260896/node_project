var http= require("http");
http.createServer(function(req,res){
    var book=[
        {name:"HTML",price:400,qty:2},
        {name:"CSS",price:500,qty:5},
        {name:"JS",price:600,qty:7},
        {name:"Java",price:800,qty:9},
        {name:"Python",price:1000,qty:5}
    ]
    var jsonData =  JSON.stringify(book);
    res.write(jsonData);
    res.end();
}).listen(2222);