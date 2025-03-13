import  jwt from 'jsonwebtoken';
import { Config } from '../../infrastructure/config/config'
import { User } from '../../domain/entities/User';


export class JwtService {
  static generateToken(user: User): string {
    return jwt.sign({id: user.id, email:user.email }, Config.jwtSecret, { expiresIn: "1h" })

  }

  static verifyToken(token: string): {id: string; email: string } {
    return jwt.verify(token,Config.jwtSecret) as { id: string; email: string }
  }


  
}
