import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3535;


app.listen(port, ()=>{
    console.log(`Server is listening on PORT: http://localhost:${port}`);
    connectDB();
})
