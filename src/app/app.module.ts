import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{LoginModule} from './login/login.module';


import { RegisterationModule } from './registeration/registeration.module';
import { RouterModule} from '@angular/router';
import { AppRouterModule } from './app.router-module.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/app.home.module';

import { LoginService } from './login/login.services';
import { HomeService } from './home/app.home.service';
import { SlectedMovieComponent } from './slected-movie/slected-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SlectedMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegisterationModule,
    HttpClientModule,
    RouterModule,
    AppRouterModule,
    HomeModule
  ],
  providers: [LoginService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
