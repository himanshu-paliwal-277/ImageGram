import express from "express";
import { connectDB } from './config/dbConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// If the url starts with /api then the request is forwarded to the apiRouter
app.use("/api", apiRouter);

// Start the server and connect to DB
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB(); 
});
