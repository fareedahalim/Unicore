import {User} from '../../domain/entities/User';
import { UserRepository } from '../../domain/repository/UserRepository';
import { HashPasswordService } from '../../infrastructure/services/HashPasswordServices';
import { JwtService } from '../../infrastructure/services/jwtService';
export class LoginUser{
  constructor(private userRepository : UserRepository){}

  async execute(email: string, password: string): Promise<{ user: any; token: string }> {
    const user=await this.userRepository.findByEmail(email);
    if(!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await HashPasswordService.comparePasswords(password,user.password);
    if(!isPasswordValid) {
      throw new Error("Invalid credentials");

    }

    const token=JwtService.generateToken(user);
    return { user, token };
  }
}