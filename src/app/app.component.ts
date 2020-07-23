import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      login: new FormControl('',
         (passControl): ValidationErrors => {
        if (passControl.value.length < 5) {
          return {less: true};
        }
        if (passControl.value.length > 10) {
          return  {ower: true};
        }
        }),
      password: new FormControl(''),
      repeatPass: new FormControl('')
      },
      this.passValid.bind(this)
    );

  }


  save(form: FormGroup): void {
    console.log(form.controls.login.value + '\n' + form.controls.password.value);
  }

passValid(form: FormGroup): null | object  {
    const result1 = form.controls.password.value;
    const  result2 = form.controls.repeatPass.value;

    if (result2 === result1) {
      return null;
    }
    else {
      return {ErrPassword: true};
    }
}

}

