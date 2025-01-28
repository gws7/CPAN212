/*

/name
/greeting
/add
/calculate

*/

import express from "express";

const router = express.Router()

//Checking if in route
router.get("/", (req, res)=>{
    res.send("Welcome to the lab router")
})

//Name route
router.get("/name", (req, res)=>{
    res.send("Gabriel Sosin - N01646959")
})

//Greetings
router.get("/greeting", (req, res)=>{
    res.send("Hello from Gabriel, Im a broke college student :)")
})

//Add
router.get("/add/:x/:y", (req, res)=>{
    let x = parseFloat(req.params.x)
    let y = parseFloat(req.params.y)
    res.send(`${x+y}`)
})

//Calculate
router.get("/calculate/:a/:b/:operation", (req, res)=>{
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    let operation = req.params.operation
    let result = 0

    switch (operation) {
        case "+":
            result = a + b
            break;
        case "-":
            result = a - b
            break;
        case "*":
            result = a * b
            break;
        case "/":
            if(b === 0){
                res.send("Divide by 0 error")
            } else {
            result = a / b                 
            }
            break;
        default:
            res.send("Invalid Operation")
            break;
    }
    res.send(`This is the result of ${operation} is ${result}`)
})

export default router