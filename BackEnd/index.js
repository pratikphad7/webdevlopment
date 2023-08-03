const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//middleware to parse json request body
app.use(express.json());

//import routes for ToDO API
const todoroutes = require("./routs/todos");

//mount the APIs routs
app.use("/api/v1",todoroutes);

//stat server
app.listen(PORT, () =>{
    console.log('Server started successfully at ${PORT}');
})

//connection to DataBase

const dbConnect = require("./config/database");
dbConnect();

//default routs
app.get("/", (req,res) => {
    res.send('<h1>This Home Page</h1>')
})
