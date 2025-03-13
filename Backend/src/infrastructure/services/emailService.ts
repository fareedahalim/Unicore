export class EmailService {
  static async sendVerificationEmail(email: string, token: string): Promise<void> {
      // Placeholder for sending an email
      console.log(`Sending verification email to ${email} with token ${token}`);
      // Integrate with nodemailer or another email service here
  }

  static async sendPasswordResetEmail(email: string, token: string): Promise<void> {
      // Placeholder for sending a password reset email
      console.log(`Sending password reset email to ${email} with token ${token}`);
  }
}