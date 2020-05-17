import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public  email : string;
  public password : string;
  public name : string;

  constructor(private auth : AuthenticationService, public router:Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then( auth => {
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => console.log(err))
  }

}
