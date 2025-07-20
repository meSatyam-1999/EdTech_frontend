import mongoose from "mongoose";


export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is successfully Connected to the server");
    } catch (error) {
        console.log(error);
    }
}