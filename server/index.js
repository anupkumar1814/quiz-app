// we will creating server of Express so we need to import express
// in older nodejs we can import express as-->
// --> const express=require('express')
// but now node js has ES6 syntax so we can directly write as import statement as folllows
// Importing express framework
import express from "express";

// Importing database connection
import Connection from "./database/db.js";

// Importing routes
import route from "./routes/route.js";

import dotenv from "dotenv"
// // to initaialise dotenv
dotenv.config();
const PORT =  8000;
// Creating express app
const app=express();

// Importing CORS for handling cross-origin requests
import cors from "cors";
app.use(cors());

// Parsing incoming request bodies in JSON format
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));

// Establishing database connection
Connection();

// Defining the port number


// Using the defined routes

app.use('/',route);

// Creating server for the express app
app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`);
});
