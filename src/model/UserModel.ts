export default class UserModel {
    userEmail: string;
    userPassword: string;
    constructor(userEmail: string, userPassword: string) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}