import { ValidatorFn } from "@angular/forms";
import { IconDefinition } from "@fortawesome/angular-fontawesome";

export interface IForm {
    inputTitle: string, 
    inputType: string, 
    inputId: string, 
    divClass: string, 
    inputClass: string,
    formControlName:string,
    isSelect?: boolean;
    selectOptions?: { label: string; value: string }[];
    inputIcon: IconDefinition,
    validators?: ValidatorFn[];

}