export default class MonitoringLogModel {
    logCode: string;
    logDate: string;
    logDetails: string;
    logStaffId: string;
    logeFieldCode: string;
    logeCropCode: string;
    logImage: string;
    constructor(logCode: string, logDate: string, logDetails: string, logStaffId: string, logeFieldCode: string,
                logeCropCode: string, logImage: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.logStaffId = logStaffId;
        this.logeFieldCode = logeFieldCode;
        this.logeCropCode = logeCropCode;
        this.logImage = logImage;

    }
}