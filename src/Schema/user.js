import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLenght: 5,
        validate: {
            validator: (emailValue) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: "Invalid email formate"
        }
    },
    password: {
        type: String,
        required: true,
        minLenght: 5
    }
}, {timestamps: true})

const user = mongoose.model("User", userSchema);
// create a user collection

export default user;