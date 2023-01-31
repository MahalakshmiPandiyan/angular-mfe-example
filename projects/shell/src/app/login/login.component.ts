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
  output:any;
  constructor(private authService:AuthService, private route:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('',{nonNullable:true,validators:[Validators.required]}),
      password: new FormControl('', {nonNullable:true,validators:[Validators.required]})
    });
  }

  onSubmit() {
     this.output=this.authService.checkUser(this.loginForm.value["email"],this.loginForm.value["password"]);
    if(this.output===true){
      this.route.navigate(['products']).then(()=>{
        window.location.reload();
      })
    }
    else{
      this.msg = "Invalid";
    }
  }

}
