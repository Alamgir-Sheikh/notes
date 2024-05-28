export class Users {

  constructor(
    private email: string,
    private password: string,
    private firstName: string,
    private lastName: string
  ) {}

  toJson() {
    return {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}
