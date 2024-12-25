import mongoose from "mongoose";



export const Connection = async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.0tluu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL,{});
        console.log('connected now');
    } catch (error) {
        console.log('Error while connecting',error.message);
    }

}

export default Connection;