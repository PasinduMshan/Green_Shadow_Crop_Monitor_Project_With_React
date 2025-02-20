export default class VehicleModel {
    vehicleCode: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    vehicleStatus: string;
    remarks: string;
    vehicleStaffId: string;
    constructor(vehicleCode: string, licensePlateNumber: string, vehicleCategory: string, fuelType: string,
                vehicleStatus: string, remarks: string, vehicleStaffId: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.vehicleStatus = vehicleStatus;
        this.remarks = remarks;
        this.vehicleStaffId = vehicleStaffId;
    }
}