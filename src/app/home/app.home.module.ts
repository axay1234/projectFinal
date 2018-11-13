import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { HomeComponent } from './app.home.component';
import { HomeService } from './app.home.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [HomeService],
  bootstrap: [HomeComponent],
  exports:[HomeComponent]

})
export class HomeModule { }
