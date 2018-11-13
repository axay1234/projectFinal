import { Component, OnInit } from '@angular/core';
import { HomeService } from './app.home.service';


import {  Movies } from './home.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './app.home.template.html',
  styleUrls: ['./app.home.scss']
})
export class HomeComponent implements OnInit {

 
  movies: Observable <Movies[]>;
  selectedId: number;

    constructor(private homeService:HomeService, private route:ActivatedRoute) {
      
    }
    ngOnInit(){
      // this.getAllMovies();

      this.movies = this.route.paramMap.pipe(
        switchMap(params => {
          // (+) before `params.get()` turns the string into a number
          this.selectedId = +params.get('id');
          return this.homeService.getAllMovies();
        })
      );
    }
   
    // getAllMovies(){
    //   this.homeService.getAllMovies().subscribe((res: Movies[])=> {
    //     this.movies = res;
    //     console.log(res);
    //   });
     
    // }

} 