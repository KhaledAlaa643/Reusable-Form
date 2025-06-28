import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../form.component';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { IForm } from '../models/form.interface';
import { ResuableFormService } from '../resuableForm.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormComponent,FormsModule ],

})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  formData: IForm[] = [
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
    }
  ];
  constructor(private reusableForm:ResuableFormService){}

  ngOnInit() {
    this.registerForm = this.reusableForm.initiateForm(this.formData)
  }

}
