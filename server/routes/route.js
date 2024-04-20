import express from "express";

import {addResponse} from "../controller/response-controler.js"


const route =express.Router();

// add is endpoint which will be hit
// second argument tells what to do when this endpoint is hit
// here we want to save data

// data coming from client side withn axios.post will be passed to function addUser in request 

route.post("/addresponse",addResponse);
export default route;
 