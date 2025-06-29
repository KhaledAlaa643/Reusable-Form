import { Component, computed, input, Input } from '@angular/core';
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
  formData = input.required<IForm[]>()
  formGroupName = input.required<FormGroup>()

  isFormArray = input<boolean>(false)
  formArrayData = input<FormArray>()
  itemObject = input<any>()
  formArrayItems = input<string>() 
  itemObjectKeys = computed(() => Object.keys(this.itemObject()));
  
  constructor (private formBuilder:FormBuilder){}

  get items(): FormArray {
    const control = this.formGroupName().get(this.formArrayItems()!);
    if (!control || !(control instanceof FormArray)) {
      console.warn(`No FormArray found for '${this.formArrayItems()}'`);
      return new FormArray<any>([]);
    }
    return control;
  }
  
  private createItem(): FormGroup {
    return this.formBuilder.group(this.itemObject());
  }
  addItem(): void {
    this.items.push(this.createItem());
  }
  removeItem(index: number): void {    
    this.items.removeAt(index);
  }
  onSubmit(){
    if (this.formGroupName().valid) {
      console.log(this.formGroupName().value);
    }
  }
}
