import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

interface user{
  name: string
  uid: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public datauser: any = [];

  constructor(private router: Router,  public authservice : AuthenticationService, private db : AngularFirestore
    ) {}
  returnhome(){
    this.router.navigate(['home']);
  }
  Onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.authservice.getusers().subscribe( users => {
      users.map(user => {
        const data: user=user.payload.doc.data() as user;
        data.uid = user.payload.doc.id;
        this.datauser.push(data);
        console.log(user)
      })  
    })
  }
}
