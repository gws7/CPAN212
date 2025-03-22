//Imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import book_router from "./routers/book_router.js";
import user_router from "./routers/user_router.js"

//Variables
dotenv.config()
const app = express();
const PORT = process.env.PORT || 6000;

//Middleware
app.use(cors());
app.use(express.json()); //Allows for JSON information
app.use(express.urlencoded({extended: true})) //Allows to get HTML forms

//Routes
app.use("/book", book_router)
app.use("/user", user_router)

//Start Up
mongoose.connect(process.env.MONGODB_URL).then( //This establishes a connection to the database

    () => {
        console.log(`Database is Connected`)
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    }

)