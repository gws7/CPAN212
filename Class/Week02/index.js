//const http = require("http");
//By adding type: module to the package.json file in week 2, you can use import instead
import http from "http";
import fs from "fs";
const app = http.createServer((req, res) => {
    if(req.url === "/"){
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage);
    } else if(req.url === "/about") {
        res.end("Welcome to about us")

    } else if(req.url === "/user/account/id") {
      res.end("My name is Gabriel")  

    } else {
        res.end("PAGE NOT FOUND")
        
    }
});
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});

//https://www.ebay.ca/itm/3131243523513

//domain: localhost
//endpoint -> itm
//id -> 3131243523513