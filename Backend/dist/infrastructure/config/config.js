"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.MONGO_URI || "mongodb://localhost:27017/UNICORE",
    jwtSecret: process.env.JWT_SECRET || "default-secret-key",
};
