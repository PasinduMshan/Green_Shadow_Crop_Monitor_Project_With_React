export default class CropModel {
    cropCode: string;
    cropCommonName: string;
    cropScientificName: string;
    cropCategory: string;
    cropSeason: string;
    fieldCode: string;
    cropImage: string;
    constructor(cropCode: string, cropCommonName: string, cropScientificName: string, cropCategory: string,
                cropSeason: string, fieldCode: string, cropImage:string) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropCategory = cropCategory;
        this.cropSeason = cropSeason;
        this.fieldCode = fieldCode;
        this.cropImage = cropImage;
    }
}