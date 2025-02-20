export default class UserModel {
    userEmail: string;
    userPassword: string;
    userRole: string;
    constructor(userEmail: string, userPassword: string, userRole: string) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userRole = userRole;
    }
}