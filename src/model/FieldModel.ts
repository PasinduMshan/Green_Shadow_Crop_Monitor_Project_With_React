export default class FieldModel {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize: string;
    fieldImage01: string;
    fieldImage02: string;
    constructor(fieldCode: string, fieldName:string, fieldLocation: string, fieldSize: string, fieldImage01: string, fieldImage02: string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.fieldImage01 = fieldImage01;
        this.fieldImage02 = fieldImage02;
    }
}