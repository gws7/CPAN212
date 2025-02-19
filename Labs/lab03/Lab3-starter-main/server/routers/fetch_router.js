import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url"; // for file path

const router = express.Router();

// grab the current directory to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // this will link us to the router folder
// we need to move from /server/routers to /server/uploads
const upload_directory = path.join(__dirname, "../uploads");

router.get("/single", (req, res) => {
  // we read the directory items synchronously to not trip the async speed
  let files_array = fs.readdirSync(upload_directory); // 1 Find a folder
  // error checking
  if (files_array.length == 0) {
    // adding return will stop the rest of the operations
    return res.status(503).send({
      message: "No images",
    });
  }

  let filename = _.sample(files_array); // 2 Pick a file
  res.sendFile(path.join(upload_directory, filename)); // 3 Send a file
});

// Send array of filenames
router.get("/multiple", (req, res) => {
  // 1 - finds directory
  let files_array = fs.readdirSync(upload_directory);
  // 2 - error check
  if (files_array == 0){
    return res.status(503).send({
      message: "no images",
    })
  }
  let filenames = _.sampleSize(files_array, 3);
  // [1, 2, 3, 4, 5, 6], loads iteratively 
  res.json(filenames);
});

// helper function for multiple 
//This puts the filename in the :filename and shows you the file you requested
router.get("/file/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "../uploads", req.params.filename));
});

//React asks for files, gets [1,2,3] 
//Reach makes another req for each file in different requests [1], [2], [3]
export default router;
