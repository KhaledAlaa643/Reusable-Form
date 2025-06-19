import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, isFormArray, Validators  } from '@angular/forms';
import { FormComponent } from '../form.component';
import { IForm } from '../models/form.interface';
import {
  faUser,
  faLock,
  faEnvelope,
  faBox,
  faPlay,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { ResuableFormService } from '../resuableForm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FormComponent,FormsModule ],
})

export class DashboardComponent  {
  constructor(private reusableForm:ResuableFormService){}
  loginForm!:FormGroup
  isFormArray = true; 

  itemData = {
    itemTitle: ['',Validators.required]
  }
  formData: IForm[] = [
    {
      inputTitle: 'First Name',
      inputType: 'text',
      inputId: 'first-name',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName:'firstName',
      validators: [Validators.required],
      inputIcon: faUser,
    },
    {
      inputTitle: 'Last Name',
      inputType: 'text',
      inputId: 'last-name',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName:'lastName',
      validators: [Validators.required],
      inputIcon: faUser,
    },
    {
      inputTitle: 'Email',
      inputType: 'email',
      inputId: 'email',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName:'email',
      validators: [Validators.required],
      inputIcon: faEnvelope,
    },
    {
      inputTitle: 'Password',
      inputType: 'password',
      inputId: 'password',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName:'password',
      validators: [Validators.required],
      inputIcon: faLock,
    },
    {
      inputTitle: 'Confirm Password',
      inputType: 'password',
      inputId: 'confirm-password',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName:'confirmPassword',
      validators: [Validators.required],
      inputIcon: faLock,
    },
    {
      inputTitle: 'Country',
      inputType: 'text',
      inputId: 'country',
      divClass: 'form-group',
      inputClass: 'form-control',
      formControlName: 'country',
      validators: [Validators.required],
      inputIcon: faGlobe,
      isSelect: true,
      selectOptions: [
        { label: 'Egypt', value: 'eg' },
        { label: 'USA', value: 'us' },
        { label: 'Germany', value: 'de' },
      ]
    },
    {
      inputTitle: 'Checkbox',
      inputType: 'checkbox',
      inputId: 'checkbox',
      divClass: 'form-check',
      inputClass: '',
      formControlName:'checkbox',
      inputIcon: faBox,
    },
  ];
  ngOnInit() {
    this.loginForm = this.reusableForm.initiateForm(this.formData,this.itemData,
      this.isFormArray,
      this.isFormArray ? 'hobbies' : undefined
    );  
  }
}
