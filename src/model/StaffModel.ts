export default class StaffModel {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    role: string;
    joinDate: string;
    dateOfBirth: string;
    contactNo: string;
    email: string;
    address01: string;
    address02: string;
    address03: string;
    address04: string;
    address05: string;
    constructor(staffId: string, firstName: string, lastName: string, designation: string, gender: string, role: string,
                joinDate: string, dateOfBirth: string, contactNo: string, email: string, address01: string, address02: string,
                address03:string, address04:string, address05:string) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.role = role;
        this.joinDate = joinDate;
        this.dateOfBirth = dateOfBirth;
        this.contactNo = contactNo;
        this.email = email;
        this.address01 = address01;
        this.address02 = address02;
        this.address03 = address03;
        this.address04 = address04;
        this.address05 = address05;
    }

}