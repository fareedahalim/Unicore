import { UserRepository } from "../../domain/repository/UserRepository";
import { HashPasswordService } from "../../infrastructure/services/HashPasswordServices";
import { JwtService } from "../../infrastructure/services/jwtService";
import {User} from '../../domain/entities/User'
import { EmailService } from "../../infrastructure/services/emailService";


export class RegisterUser {
    constructor(private userRepository: UserRepository){}

    async execute(name: string, email: string, password: string): Promise<void> {
        const existingUser = await this.userRepository.findByEmail(email);
        if(existingUser){
            throw new Error("User already existing");
        }

        const hashedPasswod = await HashPasswordService.hashPassword(password);
        const user = new User(Date.now().toString(), name, email, hashedPasswod, "", false, new Date(), new Date());
        await this.userRepository.create(user);

        // const token = JwtService.generateToken(user);
        // await EmailService.sendVerificationEmail(email,token);
        
    }
}