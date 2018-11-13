import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HomeService } from '../home/app.home.service';
import { switchMap } from 'rxjs/operators';
import { Movies } from '../home/home.model';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slected-movie',
  templateUrl: './slected-movie.component.html',
  styleUrls: ['./slected-movie.component.css']
})
export class SlectedMovieComponent implements OnInit {
  movies: Observable <Movies>;
  
  constructor( private route: ActivatedRoute,
    private router: Router,
    private homeService:HomeService,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.homeService.getMovie(params.get('id')))
    );
  }
  getTrailerUrl(movie){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ movie.trailer + '')
  }

}
