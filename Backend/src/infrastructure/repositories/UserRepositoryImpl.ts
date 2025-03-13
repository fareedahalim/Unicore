import { User } from "../../domain/entities/User"
import { UserRepository } from "../../domain/repository/UserRepository"
import { UserModel } from "../models/userModel"


export class UserRepositoryImpl implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        try {
            console.log('Entering user repository');

            const userDoc = await UserModel.findOne({ email }).exec();
            if (!userDoc) {
                console.log("User not found in database");
                return null;
            }

            console.log('User found:', userDoc);

            return new User(
                userDoc.id.toString(), 
                userDoc.name, 
                userDoc.email, 
                userDoc.password, 
                userDoc.image || "", 
                userDoc.isAdmin || false,
                userDoc.createdAt || new Date(),
                userDoc.updatedAt || new Date() 
            );
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw new Error("Failed to fetch user by email");
        }
    }

    async create(user: User): Promise<void> {
        try {
            const userDoc = new UserModel({
                name: user.name,
                email: user.email,
                password: user.password,
                image: user.image,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            });
            await userDoc.save();
            console.log('User saved successfully:', userDoc);
        } catch (error) {
            console.error("Error saving user:", error);
            throw new Error("Failed to save user");
        }
    }
}