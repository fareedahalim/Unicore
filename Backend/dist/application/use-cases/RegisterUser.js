"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const HashPasswordServices_1 = require("../../infrastructure/services/HashPasswordServices");
const User_1 = require("../../domain/entities/User");
class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(email);
            if (existingUser) {
                throw new Error("User already existing");
            }
            const hashedPasswod = yield HashPasswordServices_1.HashPasswordService.hashPassword(password);
            const user = new User_1.User(Date.now().toString(), name, email, hashedPasswod, "", false, new Date(), new Date());
            yield this.userRepository.create(user);
            // const token = JwtService.generateToken(user);
            // await EmailService.sendVerificationEmail(email,token);
        });
    }
}
exports.RegisterUser = RegisterUser;
