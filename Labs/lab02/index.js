import express from "express";
//Importing the whole file imports whatever is saved in that file
import lab_router from "./routers/lab_router.js";

const app = express();
const PORT = process.env.PORT || 8000;

//Imported routes
// -> localhost:8000/lab
app.use("/lab", lab_router)

app.get("/", (req, res)=>{
    res.send("Welcome to the server")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:8000`)
})