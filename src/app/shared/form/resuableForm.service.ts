import { Injectable } from '@angular/core';
import { IForm } from './models/form.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

type formArrayName = {
  isFormArray :boolean
}
@Injectable({
  providedIn: 'root'
})
export class ResuableFormService {

constructor(private formBuilder: FormBuilder) { }
initiateForm(
  formData: IForm[],
  isFormArray?: boolean,
  formArrayName?: string | undefined,
  itemData?: any
  ): FormGroup {

  const group: any = {};
  formData.forEach(field => {
    group[field.formControlName] = new FormControl('', field.validators || []);
  });

  if (formArrayName && isFormArray) {
    group[formArrayName] = this.formBuilder.array([
      this.formBuilder.group(itemData)
    ]);
  }

  return this.formBuilder.group(group);
}

}
