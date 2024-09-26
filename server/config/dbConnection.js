import mongoose from "mongoose";

export const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI_LOCAL,{});      
        console.log("Server connected to database successfully...📅");  
    } catch (error) {
        console.log(error.message);
    }
};