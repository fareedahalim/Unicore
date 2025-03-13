import mongoose from 'mongoose';
import { Config } from '../../infrastructure/config/config'

export const connectDB = async () => {
    try {
       await mongoose.connect(Config.DB_URI);
       console.log("DB connect"); 
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1)
        
    }
}
