import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type : String,
        required: true,
        max: 25,
        min: 5,
        trim: true
    },
    lastname: {
        type : String,
        required: true,
        max: 25,
        min: 5,
        trim: true
    },
    username: {
        type : String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type : String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type : String,
        required: true,
    },
    phone: {
        type : String,
        required: true,
    }
    
});


const user = mongoose.model('user', userSchema);

export default user;