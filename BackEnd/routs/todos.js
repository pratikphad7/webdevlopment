const express = require("express");
const router = express.Router();

//import router
const {createToDo} = require("../controller/createToDo");
 
//define API routes
router.post("/createToDo", createToDo);

module.exports = router;