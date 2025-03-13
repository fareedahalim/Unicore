"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../infrastructure/config/config");
class JwtService {
    static generateToken(user) {
        return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.Config.jwtSecret, { expiresIn: "1h" });
    }
    static verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, config_1.Config.jwtSecret);
    }
}
exports.JwtService = JwtService;
