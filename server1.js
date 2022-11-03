const express = require("express");
const app=express();
const cors = require("cors"); //cors is a seperate module that we are integrating with express
app.use(cors()); 
app.use(express.json());

//api start
app.get("/userlist",function(req,res){
    var user = ["Alex", "John", "Deepa","Rasika","Madhuri","Jhon"];
    var jsonData = JSON.stringify(user);
    res.write(jsonData);
    res.end();
});

app.get("/booklist",function(req,res){
    var book = ["HTML", "CSS", "Node","Java","PHP","JS","React","Angular"];
    var jsonData = JSON.stringify(book);
    res.write(jsonData);
    res.end();
});

app.get("/citylist",function(req,res){
    var city = ["Bangalore", "Pune", "Delhi","Chennai","Mumbai","Hyderabad"];
    var jsonData = JSON.stringify(city);
    res.write(jsonData);
    res.end();
});

app.get("/companylist",function(req,res){
    var company = ["Cognizant", "TCS", "HCL","Infosys","Accenture","Tech Mahindra"];
    var jsonData = JSON.stringify(company);
    res.write(jsonData);
    res.end();
});

/* app.get("/userlist",function(req,res){
    var user = ["Alex", "John", "Deepa","Rasika","Madhuri","Jhon"];
    var jsonData = JSON.stringify(user);
    res.write(jsonData);
}); */


//api end

app.listen(1234,function(){

});

/* base url will be http://localhost:1234 and the endpoint will be 
                    http://localhost:1234/userlist
                    http://localhost:1234/booklist
                    http://localhost:1234/productlist
                    http://localhost:1234/booklist

*/
                    


