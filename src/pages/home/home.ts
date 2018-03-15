import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { FirebaseListObservable} from "angularfire2/database-deprecated";
import { LoginPage } from '../login/login';
import { CalPage } from '../cal/cal';
import { Data } from "../../models/data";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//profile={} as Profile;

data ={} as Data;

DataRef$:AngularFireList<any>
google={
    loggin:false,
    name:'',
    email:''
}
  constructor(private afauth: AngularFireAuth,
    public navCtrl: NavController,
    private db:AngularFireDatabase
    ) {
      this.DataRef$=this.db.list('Data-list');
  }

  logout(){
    // this.afauth.auth.signOut()
    // .then(res=>{
    //   this.google.loggin=false;
    //   console.log(res);
      this.navCtrl.setRoot(CalPage);
    // })
  }

  add(data:Data){
    this.DataRef$.push(this.data)
  }
  // submit(){
  //   this.afauth.authState.subscribe(auth=>{
  //     this.db.object('/profile/${auth.uid}').set(this.profile)
  //   })
  // }
}

