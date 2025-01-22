/*

Home Page
About Us
Contact
Login
Register
Details
Search Page

*/

import http from "http";
import fs from "fs";
import path from "path";
//Imported module to solve path and ES issue
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//End of fix for ES and path issue.

const app = http.createServer((req, res)=>{
    if(req.url === "/") {
        res.write("Hello World");
        res.end();
    } 
    else if (req.url === "/about") {
        const webpage = fs.readFileSync(path.join(__dirname, "pages", "about.html"));
        res.end(webpage);
    } 
    else if (req.url === "/contact") {
        res.write("Contact");
        res.end(); 
    }  
    else if (req.url === "/login") {
        res.write("Login");
        res.end();
    } 
    else if (req.url === "/register") {
        res.write("Register");
        res.end();
    } 
    else if (req.url === "/details") {
        res.write("Details");
        res.end();
    } 
    else if (req.url === "/search") {
        res.write("Search");
        res.end();
    } 
    else {
        res.write("Page not found");
        res.end();
    }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})
