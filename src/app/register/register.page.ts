import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

//import { AuthenticationService } from '../services/authentication.service';
import {UserinfoService} from '../services/userinfo.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email : string = "";
  password : string= "";
  name : string= "";
  skin:string= "";
  gender:string="";

  constructor(
    public afAuth: AngularFireAuth, 
    public user: UserinfoService,
    public afstore: AngularFirestore,
    public router:Router) { }

  ngOnInit() {
  }
  async OnSubmitRegister(){
    const { email, password, name, skin, gender} = this
    try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    this.afstore.doc(`users/${res.user.uid}`).set({
      email,
      name,
      skin, 
      gender
    })
    this.user.setUser({
        email,
        uid: res.user.uid
      })
    this.router.navigate(['/home'])
    } catch(err) {
			console.dir(err)
			if(err.code === "auth/email-already-in-use") {
				alert('El email que ingresaste ya se encuentra en uso')
      }
      else if(err.code === "auth/weak-password") {
				alert('La contraseña debe ser de mínimo 6 caracteres')
      }
		}
  }
}
