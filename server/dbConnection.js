// You could set up you database here instead, if your prefer
// set up your database pool

import pg from "pg";
import dotenv from "dotenv";

dotenv.config()

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString
})