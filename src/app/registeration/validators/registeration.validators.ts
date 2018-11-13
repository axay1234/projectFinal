import { Observable } from "rxjs";
import { ValidationErrors, FormControl } from "@angular/forms";


import { map, catchError } from "rxjs/operators";


import { LoginService } from "../../login/login.services";
import { User } from "src/app/app.model";

export class SignupAsyncValidators {


    static isUsernameAvailable(loginService: LoginService)   {
        return (control: FormControl) : Observable<ValidationErrors | null> | Promise<ValidationErrors | null> => {
             console.log("asdsadsadsaqwewq" + control.value);
            return loginService.isUserAvailable(control.value).pipe(
                map((user : User) => 
                    user != null ? {'usernameNotAvailable': true } : null
                ),
                catchError((error) => error)
            )
        }
        
    }
    
}