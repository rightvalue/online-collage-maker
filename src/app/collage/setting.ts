import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class Setting {
    widthInch: number = 16;
    heightInch: number = 12;
    landscape: boolean = false;
    borderWidth: number = 0;
    borderColor: string = "rgb(90,160,70)";
    mode: string = "auto";
    cells: number = 3;
    margin: number = 15;
    thumbImages: Array<object>;
}