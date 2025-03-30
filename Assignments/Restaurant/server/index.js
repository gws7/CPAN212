import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import router from "./routes/recipes_router.js";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.use((req, res)=> {
    res.status(404).json({message: "Route not found"})
})

mongoose.connect(process.env.MONGO_URI).then(
    ()=> {
        console.log("Connected to MongoDB");
        app.listen(PORT, ()=>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    }
).catch((error)=> console.error("MongoDB connection failed: ", error))