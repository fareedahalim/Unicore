export class User {
  constructor(
    public id: string,
    public fullName: string,
    public email: string,
    public password: string,
    public image: string = "",
    public isAdmin: boolean = false,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}
