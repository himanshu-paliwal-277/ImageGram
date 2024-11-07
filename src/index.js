import express from "express";
import { connectDB } from './config/dbConfig.js';
import { createPost } from './controllers/postController.js';
import { cloudinaryUploader  } from './config/multerConfig.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/upload', cloudinaryUploader.single('image'), createPost);

// HW
// Implement API's for read all posts, delete post, update post & read single post

// Start the server and connect to DB
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
