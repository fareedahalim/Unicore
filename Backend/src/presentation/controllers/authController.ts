// import { Request, Response } from "express";
// import { UserRepository } from "../../infrastructure/repositories/UserRepositoryImpl";
// import { LoginUser } from "../../application/use-cases/LoginUser";

// const userRepository = new UserRepository();
// const loginUser = new LoginUser(userRepository);

// export const loginController = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const token = await loginUser.execute(email, password);
//     res.json({ message: "Login successful", token });
//   } cach (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

import { Request, Response, NextFunction } from "express";

import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { LoginUser } from "../../application/use-cases/LoginUser";
import { RegisterUser } from "../../application/use-cases/RegisterUser";
import { STATUS_CODES } from "../../shared/constants/statusCodes";

const userRepository =new UserRepositoryImpl();
const loginUser = new LoginUser(userRepository);
const reigisterUser = new RegisterUser(userRepository);

export const AuthController = {
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;

            const { user, token } = await loginUser.execute(email, password);

            res.status(STATUS_CODES.OK).json({ user, token });
        } catch (error) {
            console.error("Error in login:", error);
            next(error);
        }
    },
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { fullName, email, password } = req.body;

            console.log("entering to the registering")
             await reigisterUser.execute(fullName, email, password);

            res.status(STATUS_CODES.CREATED).json({ message: "User registered successfully" });
        } catch (error) {
            console.error("Error in registration:", error);
            next(error);
        }
    },
}