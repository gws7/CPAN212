import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//Register
router.post("/register", (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 10).then(
        (hashedPassword) => {
            let newUser = new User({ email, password: hashedPassword })

            newUser.save().then(
                () => {
                    res.json({ message: "Registration has been successful " })
                }
            )
        }
    )
})

//Login
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).then(
        (userAccount) => {
            if(!userAccount){
                return res.status(400).json({message: "No account found"})
            }
            bcrypt.compare(password, userAccount.password).then(
                (compareResults)=>{
                    if (compareResults){
                        return res.json({message: "You have logged in"})
                    }
                }
            )
        }
    ).catch((error) => { 
        console.log(error); 
        res.json({ message: "Something went wrong" }) 
    })
})

export default router