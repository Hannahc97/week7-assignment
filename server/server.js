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
    const data = await db.query(`SELECT users.username, categories.category_name, recipes.recipe_name, recipes.minutes, recipes.ingredients, recipes.instructions  FROM users
JOIN recipes ON recipes.user_id = users.id
JOIN categories ON recipes.category_id = categories.id`)
    res.json(data.rows)
})

// I need a route to CREATE new data in the database --> the new data here is stored in the body object 

app.post("/add-recipe", async (req, res) => {
    const newData = req.body;
    const userQuery = await db.query(
        `INSERT INTO users (username, email) VALUES ($1, $2);`,[newData.username, newData.email])
        // const userId = userQuery.rows;
        // console.log("User ID:", userId); 
    const categoryQuery = db.query(
        `INSERT INTO categories (category_name) VALUES ($1)`, [newData.category_name])
        // console.log(`category data: ${userQuery[0].res.json.rows}`)
    // const categoryID = categoryQuery.rows.id
    const recipeQuery = db.query(
        `INSERT INTO recipes (recipe_name, minutes, ingredients, instructions)
        VALUES ($1, $2, $3, $4)`, [newData.recipe_name, newData.minutes, newData.ingredients, newData.instructions])
    res.json({message: "Data sent to the database!"})
})

// ===============================================================

//? STRETCH GOAL: I want to delete data from the database --> use params 




