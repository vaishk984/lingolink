import moongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await moongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
}