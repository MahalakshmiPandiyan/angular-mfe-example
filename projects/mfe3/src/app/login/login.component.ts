import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  msg:any
  constructor(private authService:AuthService, private route:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    var output=this.authService.checkUser(this.loginForm.value["email"],this.loginForm.value["password"]);
    if(output===true){
      this.route.navigate(['products']).then(()=>{
        window.location.reload();
      })
    }
    else{
      this.msg = "Invalid";
    }
  }

}
