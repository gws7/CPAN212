import express, { urlencoded } from "express";
import cors from "cors";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename)
console.log(__dirname)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname ,'../uploads/'))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

const app = express();
const PORT = process.env.PORT || 8000;
 
// middleware
app.use(cors());
app.use(express(urlencoded({extended: true}))); // for HTML forms
app.use(express.json()); //extracts app/json data, OLD method used body parser

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

// send data
app.get("/data", (req, res) => {
    const data = {
        lname: "Sosin",
        fname: "Gabriel"
    }
    res.send(data);
});

app.post("/login", (req, res) => {
    console.log(req.body);
    //Process with DB in future
    res.send("I stole your data")
})

// new stuff during lab session
app.post("/fileform", upload.single("file"),(req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.send("Info received")
})
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});