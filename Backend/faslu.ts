// import { IUserRepository } from "../../../domain/repositories/IUserRepository";
// import { User } from "../../../domain/entities/User";
// import { UserModel } from "../models/userModel";
// import { TeamModel } from "../models/TeamModel";
// import mongoose from "mongoose";


// export class UserRepository implements IUserRepository {
//     async findByEmail(email: string): Promise<User | null> {
//         try {
//             console.log('entering to user repository');
            
//             const userDoc = await UserModel.findOne({ email });
//             if (!userDoc) {
//                 console.log("User not found in database");
                
//                 return null;
//             }
//             console.log('user found',userDoc);
            
            
//             return new User(
//                 userDoc._id.toString(),
//                 userDoc.name,
//                 userDoc.email,
//                 userDoc.role as "admin" | "team-lead" | "employee",
//                 userDoc.password || null,
//                 userDoc.profilePic,
//                 userDoc.teamId?.toString() ?? null,
//                 userDoc.projects?.map(p => p.toString()) || [],
//                 userDoc.createdAt,
//                 userDoc.updatedAt,
//                 userDoc.isBlocked,
//                 userDoc.phone ?? null,
//                 userDoc.location ?? null,
//                 userDoc.company ?? null,
//                 userDoc.status as "active" | "inactive"
//             );
//         } catch (error) {
//             console.error("Error finding user by email:", error);
//             throw new Error("Failed to fetch user by email");
//         }
//     }

//     async findById(id: string): Promise<User | null> {
//         try {
//             const userDoc = await UserModel.findById(id);
//             if (!userDoc) return null;

//             return new User(
//                 userDoc._id.toString(),
//                 userDoc.name,
//                 userDoc.email,
//                 userDoc.role as "admin" | "team-lead" | "employee",
//                 userDoc.password || null,
//                 userDoc.profilePic,
//                 userDoc.teamId?.toString() ?? null,
//                 userDoc.projects?.map(p => p.toString()) || [],
//                 userDoc.createdAt,
//                 userDoc.updatedAt,
//                 userDoc.isBlocked,
//                 userDoc.phone ?? null,
//                 userDoc.location ?? null,
//                 userDoc.company ?? null,
//                 userDoc.status as "active" | "inactive"
//             );
//         } catch (error) {
//             console.error("Error finding user by ID:", error);
//             throw new Error("Failed to fetch user by ID");
//         }
//     }

//     async save(user: User): Promise<User> {
//         try {
//             const userDoc = await UserModel.create({
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//                 password: user.password,
//                 profilePic: user.profilePic,
//                 teamId: user.teamId,
//                 projects: user.projects,
//                 createdAt: user.createdAt,
//                 updatedAt: user.updatedAt,
//                 isBlocked: user.isBlocked,
//                 phone: user.phone,
//                 location: user.location,
//                 company: user.company,
//                 status: user.status
//             });

//             return new User(
//                 userDoc._id.toString(),
//                 userDoc.name,
//                 userDoc.email,
//                 userDoc.role as "admin" | "team-lead" | "employee",
//                 userDoc.password || null,
//                 userDoc.profilePic,
//                 userDoc.teamId?.toString() ?? null,
//                 userDoc.projects ? userDoc.projects.map((p: any) => p.toString()) : [],
//                 userDoc.createdAt,
//                 userDoc.updatedAt,
//                 userDoc.isBlocked,
//                 userDoc.phone ?? null,
//                 userDoc.location ?? null,
//                 userDoc.company ?? null,
//                 userDoc.status as "active" | "inactive"
//             );
//         } catch (error) {
//             console.error("Error saving user:", error);
//             throw new Error("Failed to save user");
//         }
//     }

//     async updatePassword(id: string, newPassword: string): Promise<void> {
//         try {
//             console.log('final stage updating');
            
//             await UserModel.findByIdAndUpdate(id, { password: newPassword });
//         } catch (error) {
//             console.error("Error updating password:", error);
//             throw new Error("Failed to update password");
//         }
//     }

//     async findAll() {
//         try {
//           const users = await UserModel.find();
          
//           return users.map(userDoc => new User(
//             userDoc._id.toString(),
//             userDoc.name,
//             userDoc.email,
//             userDoc.role as "admin" | "team-lead" | "employee",
//             userDoc.password || null,
//             userDoc.profilePic,
//             userDoc.teamId?.toString() ?? null,
//             userDoc.projects?.map(p => p.toString()) || [],
//             userDoc.createdAt,
//             userDoc.updatedAt,
//             userDoc.isBlocked,
//             userDoc.phone ?? null,
//             userDoc.location ?? null,
//             userDoc.company ?? null,
//             userDoc.status as "active" | "inactive"
//           ));
//         } catch (error) {
//           console.error("Error fetching all users:", error);
//           throw new Error("Failed to fetch users");
//         }
//       }

//     /**
//      * Update specific fields of a user
//      * @param id - User ID
//      * @param updateData - Partial user fields to update
//      */
//     async update(userId: string, data: Partial<User>): Promise<User | null> {
//         console.log('block repository')
//         return await UserModel.findByIdAndUpdate(userId, data, { new: true }); // ✅ Update by userId
//     }
    

//     async findByfId(googleId: string): Promise<User | null> {
//         try {
//           const userDoc = await UserModel.findOne({ googleId });
//           if (!userDoc) return null;
      
//           return new User(
//             userDoc._id.toString(),
//             userDoc.name,
//             userDoc.email,
//             userDoc.role as "admin" | "team-lead" | "employee",
//             userDoc.password || null,
//             userDoc.profilePic,
//             userDoc.teamId?.toString() ?? null,
//             userDoc.projects?.map(p => p.toString()) || [],
//             userDoc.createdAt,
//             userDoc.updatedAt,
//             userDoc.isBlocked,
//             userDoc.phone ?? null,
//             userDoc.location ?? null,
//             userDoc.company ?? null,
//             userDoc.status as "active" | "inactive"
//           );
//         } catch (error) {
//           console.error("Error finding user by Google ID:", error);
//           throw new Error("Failed to fetch user by Google ID");
//         }
//       }   
      
//       async updateUserProfile(email: string, updateData: Partial<User>): Promise<User | null> {
//         try {
//           const updatedUser = await UserModel.findOneAndUpdate(
//             { email },
//             { $set: updateData },
//             { new: true }
//           );
    
//           if (!updatedUser) return null;
    
//           return new User(
//             updatedUser._id.toString(),
//             updatedUser.name,
//             updatedUser.email,
//             updatedUser.role as "admin" | "team-lead" | "employee",
//             updatedUser.password || null,
//             updatedUser.profilePic,
//             updatedUser.teamId?.toString() ?? null,
//             updatedUser.projects?.map((p) => p.toString()) || [],
//             updatedUser.createdAt,
//             updatedUser.updatedAt,
//             updatedUser.isBlocked,
//             updatedUser.phone ?? null,
//             updatedUser.location ?? null,
//             updatedUser.company ?? null,
//             updatedUser.status as "active" | "inactive"
//           );
//         } catch (error) {
//           console.error("Error updating user profile:", error);
//           throw new Error("Failed to update user profile");
//         }
//     }

//     async getTeamMembers(teamId: string | mongoose.Types.ObjectId) {
//       console.log(teamId, 'team id in user repository');
  
//       const team = await TeamModel.aggregate([
//           {
//               $match: { _id: new mongoose.Types.ObjectId(teamId) } // Match the team by ID
//           },
//           {
//               $lookup: {
//                   from: "users", // The collection name for users
//                   localField: "members", // The field in the Team collection
//                   foreignField: "_id", // The field in the User collection
//                   as: "teamMembers" // The output array name
//               }
//           },
//           {
//               $project: {
//                   _id: 0, // Exclude team document details
//                   teamMembers: 1 // Only return team members
//               }
//           }
//       ]);
  
//       if (!team || team.length === 0) {
//           console.log("Team not found");
//           return [];
//       }
  
//       console.log("Fetched Members:", team[0].teamMembers);
//       return team[0].teamMembers;
//   }
  
  
  
    
// }
////////////////////////////////////////////////
import { Request,Response, NextFunction } from "express";
import { UserRepository } from "../../infrastructure/database/repositories/UserRepository";
import { GetAllUsersUseCase } from "../../application/usecases/user/GetAllUsersUseCase";
import { BlockUserUseCase } from "../../application/usecases/user/BlockUserUseCase";
import { UpdateUserUseCase } from "../../application/usecases/user/UpdateUserUseCase";
import { STATUS_CODES } from "../../shared/constants/statusCodes"
import { GetUserByEmailUseCase } from "../../application/usecases/user/GetUserByEmailUseCase ";
import { token } from "morgan";
const userRepository = new UserRepository()
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
const blockUserUseCase = new BlockUserUseCase(userRepository)
const updateUserUseCase = new UpdateUserUseCase(userRepository)
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository)

export const UserController = {
    getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const users = await getAllUsersUseCase.execute();
            
            return res.status(STATUS_CODES.OK).json({users});
        } catch (error) {
            console.error('Error in getAllUsers:', error);
            next(error);
        }
    },

    blockUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
          console.log('blocking is coming up');
          
          const { id } = req.params;
          const user = await blockUserUseCase.execute(id);
      
          if (!user) {
            return res.status(STATUS_CODES.NOT_FOUND).json({
              message: "User not found",
            });
          }
      
          res.status(STATUS_CODES.OK).json({
            message: User ${user.isBlocked ? "blocked" : "unblocked"} successfully,
            user,
          });
        } catch (error) {
          next(error);
        }
      },
      
      updateUser: async  (req: Request, res: Response, next: NextFunction)=>{
        try {
          const { email, name, location, phone} = req.body;
          const profilePic = req.file?/images/${req.file.filename} : undefined;
          console.log(req.body, "Request Body in updateUser controller");
          console.log(req.file, "Uploaded file in updateUser controller");

          const updatedUser = await updateUserUseCase.execute({
            email,
            name,
            location,
            phone,
            profilePic,
          })
          const token = req.headers.authorization?.split(" ")[1];
          console.log(updatedUser,'updated user');
          
          
          if(!updatedUser){
            return res.status(STATUS_CODES.NOT_FOUND).json({message:'User not found'})
          }
          console.log(updatedUser,'updated user');
          
          res.status(STATUS_CODES.OK).json({message:'User updated successfully',user : updatedUser, token})
        } catch (error) {
          next(error)
        }
      },

      getUserProfile: async (req: Request, res: Response, next: NextFunction)=>{
        try {
          const userEmail = req.body.email
          const user = await getUserByEmailUseCase.execute(userEmail)
          if(!user){
            return res.status(STATUS_CODES.NOT_FOUND).json({message:'User not found'})
          }
          res.status(STATUS_CODES.OK).json(user)
        } catch (error) {
          next(error)
        }
      }
}