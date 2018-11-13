import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LoginService } from '../login/login.services';
import { SignupAsyncValidators } from './validators/registeration.validators';
import { User } from "src/app/app.model";


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private loginServices:LoginService) { 

  }
  ngOnInit() {
  }

  signUpForm = new FormGroup({
    username: new FormControl(
        null, 
        [Validators.required, Validators.minLength(5)],
        [SignupAsyncValidators.isUsernameAvailable(this.loginServices)]),
    password: new FormControl(null),
    emailID: new FormControl(null),
  })

  submitRegistrationForm() {
    console.log(this.signUpForm.value);
    this.loginServices.addNewUser(this.signUpForm.value).subscribe((user: User) => {

    });
  
}



}
