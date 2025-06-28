import { Component, Input } from '@angular/core';
import { IForm } from './models/form.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports:[FontAwesomeModule,ReactiveFormsModule]
})
export class FormComponent   {

  @Input('formData')  formData!:IForm[]
  @Input('formGroupName')  formGroupName!:FormGroup
  @Input ("isFormArray") isFormArray :boolean = false
  @Input ("formArrayData") formArrayData !:FormArray
  @Input ("itemObject") itemObject !:any
  @Input ("formArrayItems") formArrayItems !:string
  @Input ("options") options !:string[] | number[] | boolean[]
  
  constructor (private formBuilder:FormBuilder){
  }

  ngOnInit() {    
    if (this.isFormArray){
      this.createItem()
    }
  }
  get items (): FormArray {    
    return this.formGroupName.get(this.formArrayItems) as FormArray ?? new FormArray([]);
  }
  

  get itemObjectKeys(): string[] | any{
    if (this.isFormArray){
      return Object.keys(this.itemObject);
    }
  }
  
  private createItem(): FormGroup | any {
    if(this.isFormArray){
      return this.formBuilder.group(this.itemObject)
    }
  }
  addItem(): void {
    this.items.push(this.createItem());
  }
  removeItem(index: number): void {    
    this.items.removeAt(index);
  }
  onSubmit(){
    if (this.formGroupName.valid) {
      console.log(this.formGroupName.value);
    }
  }
}
