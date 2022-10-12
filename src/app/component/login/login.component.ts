import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordStrengthValidator } from 'src/app/validators/password-strength.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email]
    }],
    password: ['', {
      validators: [Validators.required, Validators.minLength(8), passwordStrengthValidator()]
    }]
  });

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    console.log('form', this.form);
  }

  get email() {
    return this.form.controls['email']
  }

  get password() {
    return this.form.controls['password']
  }

  sendForm() {
    console.log('sendForm');
  }

}
