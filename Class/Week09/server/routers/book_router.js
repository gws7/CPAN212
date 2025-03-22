import express from "express";
import Book from "../models/book.js";

const router = express.Router();

//1st Function - Fetch All
router.get("/", (req, res) => {
    //Fetch from DB
    Book.find().then(
        (results) => {
            res.json(results)
        }
    )
})

//2nd Function - Fetch By Id
router.get("/:id", (req, res) => {
    //Fetch from DB
    Book.findById(req.params.id).then(
        (results) => {
            res.json(results)
        }
    )
})

//3rd Function - Search
router.get("/search", (req, res) => {
    const filters = {}
    //Query:
    if (req.query.title) {
        filters.title = req.query.title;
    }

    if (req.query.pages) {
        let pages = parseInt(req.query.pages)
        if (req.query.logicalOperators) {
            switch (req.query.logicalOperators) {
                case gte:
                    filters.pages = { $gte: { pages } }
                    break;
                default:
                    break;
            }
        }
    }

    if (req.query.title) {
        filters.title = req.query.title;
    }

    Book.find(filters).then(
        (results) => {
            res.json(results)
        }
    )
})

//4th Function - Update
router.put("/:id", (req, res)=>{
    //Can they do this
    Book.findByIdAndUpdate(req.params.id).then(
        ()=>{
            res.json({message: "Update Successful"})
        }
    )
})

//4th Function - Delete
router.delete("/:id", (req, res)=>{
    Book.findByIdAndDelete(req.params.id).then(
        ()=>{
            res.json({message: "Delete Successful"})
        }
    )
})

//5th Function - Create
router.post("/save", (req, res)=>{
    const{title, author, publisher} = req.body
    let newBook = new Book({
        title,
        author,
        publisher,
        pages: 500
    })

    newBook.save().then(
        ()=>{
            res.json({message: "Data saved"})
        }
    )
})

export default router;