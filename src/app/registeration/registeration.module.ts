import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RegisterationComponent } from './registeration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login/login.services';


@NgModule({
  declarations: [
    
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
 
  exports: [RegisterationComponent]
  
})
export class RegisterationModule { }
