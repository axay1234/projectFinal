import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectfinal';

  name: String;

  constructor(private router : Router) {
        
  }
  isUserLoggedin(){
    return sessionStorage.getItem('loggedInUsername') != null;
  }
  logout() {
   
    // sessionStorage.clear();
    this.router.navigate(['login']);
}

}
