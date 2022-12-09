import {AbstractControl, AsyncValidatorFn, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators{
  static restrictedEmails(control: FormControl){
    if(['v@v.ru'].includes(control.value)){
      return {
        'restrictedEmail' : true
      }
    }
    return null;
  }

  static uniqueEmail(): AsyncValidatorFn{
    return (control: AbstractControl): Promise<any | null> | Observable<any | null> => {
      return new Promise(resolve=>{
        setTimeout(()=>{
          if(control.value === "test@test"){
            resolve({uniqueEmail: true});
          } else{
            resolve(null);
          }
        }, 2000)
      });
    }
  }

}
