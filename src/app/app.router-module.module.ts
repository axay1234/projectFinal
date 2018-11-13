import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{LoginModule} from './login/login.module';
import{LoginComponent} from './login/login.component'
import { from } from 'rxjs';
import { RegisterationModule } from './registeration/registeration.module';
import {RouterModule, Routes} from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomeComponent } from './home/app.home.component';
import { CommonModule } from '@angular/common';
import { SlectedMovieComponent } from './slected-movie/slected-movie.component';

const appRoutes: Routes = [
    {path:'' , redirectTo:'login' , pathMatch: 'full'},
    {path:'login' , component: LoginComponent},
    {path:'registeration' , component: RegisterationComponent},
    {path:'home' , component: HomeComponent},
    {path:'Movies' , redirectTo:'/selectedMovie'},
    {path:'movie/:id', redirectTo:'/selectedMovie/:id'},
    {path:'selctedMovie', component:HomeComponent },
    {path:'selectedMovie/:id',component:SlectedMovieComponent }
]
  
@NgModule({
  declarations: [
   
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  CommonModule
  ],
  providers: [],
 
})
export class AppRouterModule { }