const express = require("express");
const app=express();
const cors = require("cors"); //cors is a seperate module that we are integrating with express
app.use(cors()); 
app.use(express.json());
const mysql = require("mysql");
const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeapp",
})

//api start
app.get("/userlist",function(req,res){
    var sql = select * FROM user;
    db.query(sql,function(error,rows,fields){
        var jsonData = JSON.stringify(rows);
        res.write(jsonData);
        res.end();
    })
    
});

app.get("/booklist",function(req,res){
    var sql = select * FROM book;
    db.query(sql,function(error,rows,fields){
        var jsonData = JSON.stringify(rows);
        res.write(jsonData);
        res.end();
    })
});

app.get("/citylist",function(req,res){
    var sql = select * FROM city;
    db.query(sql,function(error,rows,fields){
        var jsonData = JSON.stringify(rows);
        res.write(jsonData);
        res.end();
    })
});

app.get("/companylist",function(req,res){
    var sql = select * FROM country;
    db.query(sql,function(error,rows,fields){
        var jsonData = JSON.stringify(rows);
        res.write(jsonData);
        res.end();
    })
});

/* app.get("/userlist",function(req,res){
    var user = ["Alex", "John", "Deepa","Rasika","Madhuri","Jhon"];
    var jsonData = JSON.stringify(user);
    res.write(jsonData);
}); */


//api end

app.listen(1235,function(){

});

/* base url will be http://localhost:1234 and the endpoint will be 
                    http://localhost:1234/userlist
                    http://localhost:1234/booklist
                    http://localhost:1234/productlist
                    http://localhost:1234/booklist

*/
                    


