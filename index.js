import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

//importing routes
import userRoutes from "./routes/user.js";

//using routes
app.use("/api", userRoutes);




const port = process.env.PORT || 3535;


app.listen(port, ()=>{
    console.log(`Server is listening on PORT: http://localhost:${port}`);
    connectDB();
})
