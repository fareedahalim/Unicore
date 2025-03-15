import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  fullName: string;
  email: string;
  password: string;
  image?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    image: { type: String, default: null },  // Default to null if no image
    isAdmin: { type: Boolean, default: false }, // Default value
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);
