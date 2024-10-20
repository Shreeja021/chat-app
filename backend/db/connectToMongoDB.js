import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectToMongoDB = async()=>{
    try{
      await mongoose.connect("mongodb+srv://shreeja21narayanan:YylARHxIQ8VRdpHB@cluster0.v7ysq.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Connected to MongoDB");
    }
    catch (error)
    {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectToMongoDB;