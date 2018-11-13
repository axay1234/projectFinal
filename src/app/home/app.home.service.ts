import { Injectable } from "@angular/core";
import {  HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movies } from "./home.model";
import { map } from "rxjs/operators";




const movie_Service = "http://localhost:3000/movies";
// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'my-auth-token'
//     })
//   };
  
@Injectable()
export class HomeService{

    constructor(private http: HttpClient) {

    }
    getAllMovies() : Observable<Movies[]> {
      // console.log('Invoked');
        return this.http.get<Movies[]>(movie_Service);
          
       
    }
    getMovie(id: number | string) {
        return this.getAllMovies().pipe(
          // (+) before `id` turns the string into a number
          map((movies: Movies[]) => movies.find(movie => movie.id === +id))
        );
      }
          
}