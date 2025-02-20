export default class EquipmentModel {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    status: string;
    staffId: string;
    fieldId: string;
    constructor(equipmentId: string, equipmentName: string, equipmentType: string, status: string, staffId: string, fieldId: string) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.status = status;
        this.staffId = staffId;
        this.fieldId = fieldId;
    }
}