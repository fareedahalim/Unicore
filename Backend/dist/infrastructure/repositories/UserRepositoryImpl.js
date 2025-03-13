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
exports.UserRepositoryImpl = void 0;
const User_1 = require("../../domain/entities/User");
const userModel_1 = require("../models/userModel");
class UserRepositoryImpl {
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Entering user repository');
                const userDoc = yield userModel_1.UserModel.findOne({ email }).exec();
                if (!userDoc) {
                    console.log("User not found in database");
                    return null;
                }
                console.log('User found:', userDoc);
                return new User_1.User(userDoc.id.toString(), userDoc.name, userDoc.email, userDoc.password, userDoc.image || "", userDoc.isAdmin || false, userDoc.createdAt || new Date(), userDoc.updatedAt || new Date());
            }
            catch (error) {
                console.error("Error finding user by email:", error);
                throw new Error("Failed to fetch user by email");
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDoc = new userModel_1.UserModel({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    image: user.image,
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                });
                yield userDoc.save();
                console.log('User saved successfully:', userDoc);
            }
            catch (error) {
                console.error("Error saving user:", error);
                throw new Error("Failed to save user");
            }
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
