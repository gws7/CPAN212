const http = require("http")
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Hello World");
        res.end();
    } else if (req.url === "/about") {
        res.write("About us");
        res.end();
    } else if (req.url === "/login") {
        res.write("Login");
        res.end();
    } else if (req.url === "/register") {
        res.write("Register");
        res.end();
    } else if (req.url === "/logout") {
        res.write("Logout");
        res.end();
    } else {
        res.write("Page not found");
        res.end();
    }
})

server.listen(3000);

console.log("Listening to on port 3000")