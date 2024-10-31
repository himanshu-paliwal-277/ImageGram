import mongoose from "mongoose";
import {DB_URL} from "./serverConfig.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log(`Successfully connected to databse `);
    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }
}