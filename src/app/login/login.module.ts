import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';

import { LoginService } from './login.services';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
RouterModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent],
  exports:[LoginComponent]

})
export class LoginModule { }
