"use strict";
// import { Request, Response } from "express";
// import { UserRepository } from "../../infrastructure/repositories/UserRepositoryImpl";
// import { LoginUser } from "../../application/use-cases/LoginUser";
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
exports.AuthController = void 0;
const UserRepositoryImpl_1 = require("../../infrastructure/repositories/UserRepositoryImpl");
const LoginUser_1 = require("../../application/use-cases/LoginUser");
const RegisterUser_1 = require("../../application/use-cases/RegisterUser");
const statusCodes_1 = require("../../shared/constants/statusCodes");
const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
const loginUser = new LoginUser_1.LoginUser(userRepository);
const reigisterUser = new RegisterUser_1.RegisterUser(userRepository);
exports.AuthController = {
    login: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const { user, token } = yield loginUser.execute(email, password);
            res.status(statusCodes_1.STATUS_CODES.OK).json({ user, token });
        }
        catch (error) {
            console.error("Error in login:", error);
            next(error);
        }
    }),
    register: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            yield reigisterUser.execute(name, email, password);
            res.status(statusCodes_1.STATUS_CODES.CREATED).json({ message: "User registered successfully" });
        }
        catch (error) {
            console.error("Error in registration:", error);
            next(error);
        }
    }),
};
