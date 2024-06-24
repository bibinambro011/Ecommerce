import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const MONGO_URL:string   = "mongodb://localhost:27017/ecommerce"

if(!MONGO_URL){
    console.log("mongo db url connection is not defined");
    process.exit(1)
    
}
export default function connectToDatabase () {
    console.log(process.env.DB_URI)
    mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
};