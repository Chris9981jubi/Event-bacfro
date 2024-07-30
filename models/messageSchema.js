import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [4, "Name must have at least 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    subject: {
        type: String,
        required: [true, "Subject is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minLength: [15, "Message must have at least 15 characters"],
    },
});

export const Message = mongoose.model("Message", messageSchema);
