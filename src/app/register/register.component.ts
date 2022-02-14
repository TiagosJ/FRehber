import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RegisterUser } from 'app/models/registerUser';
import { RegisterService } from 'app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  registerForm: FormGroup;
  newUser: RegisterUser;

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createRegisterForm();
  }

  addUser() {
    if (this.registerForm.valid) {
      this.newUser = Object.assign({}, this.registerForm.value); //klasik js obje mapping
      this.registerService.addUser(this.newUser);
    }
  }
}
