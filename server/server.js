// import packages
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// set up your packages 
const app = express();

app.use(express.json());

// set up your configs 
app.use(cors())

// set up a port to host our server

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})

// write your route 
app.get("/", (req, res) => {
    res.json({message: "This is the root route"})
})

// ===============================================================

// I need a route to READ data from the database
app.get("/recipes", async(req, res) => {
    const data = await db.query(`SELECT * FROM recipes`)
    res.json(data.rows)
})

// I need a route to CREATE new data in the database --> the new data here is stored in the body object 



// ===============================================================

//? STRETCH GOAL: I want to delete data from the database --> use params 




