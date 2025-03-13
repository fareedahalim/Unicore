import dotenv from 'dotenv';

dotenv.config();
export const Config={
    PORT:process.env.PORT || 3000,
    DB_URI: process.env.MONGO_URI || "mongodb://localhost:27017/UNICORE",   
    jwtSecret: process.env.JWT_SECRET || "default-secret-key",
}