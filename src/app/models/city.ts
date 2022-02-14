import { Byte } from "@angular/compiler/src/util";
import { Photo } from "./photo";

export class City {
    id:number;
    name:string;
    description:string;
    subject:string;
    userId:number;
    photos:Photo[];
    photoUrl:string;
    qrCode:Byte[];
}
