import bcrypt from 'bcryptjs';

export class HashPasswordService {
    static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password,10);
    }

    static async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}