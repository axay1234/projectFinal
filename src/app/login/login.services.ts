import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../app.model';
import { map } from "rxjs/operators";

const USER_SERVICE = "https://webdev-mintex.herokuapp.com/api/";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class LoginService{

    constructor(private http: HttpClient) {

    }
   
    getAllUsers() : Observable<User[]> {
        
      return this.http.get<User[]>(USER_SERVICE + 'user', httpOptions)
         }
        
         isUserAvailable(username: string) : Observable<User | null> {
          return this.http.get<User>(USER_SERVICE + "/user/" + username + "/username");
      }
      
      addNewUser(user: User) : Observable<User> {
        return this.http.post<User>(USER_SERVICE + 'register',user, httpOptions );
    }
    
    login(username: string, password: string): Observable<User|null>{
       return this.http.post<User>(USER_SERVICE + 'login', { username, password}, httpOptions)
       .pipe(map(user =>{
         if(user= null){
          localStorage.setItem('currentUser', JSON.stringify(user));
         }
         return user;
         
       }));


     }

 
}