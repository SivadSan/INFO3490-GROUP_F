import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFireDatabase, AngularFireList } from "angularfire2/database";
//import {AngularFireDatabase} from "angularfire2/database";
import { LoginPage } from '../login/login';
//import { CalPage } from '../cal/cal';
import { Data } from "../../models/data";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//profile={} as Profile;

data ={} as Data;

dRef$:AngularFireList<any>
DataRef$:Observable<any[]>
google={
    loggin:false,
    name:'',
    email:''
}
  constructor(private afauth: AngularFireAuth,
    public navCtrl: NavController,
    private db:AngularFireDatabase
    ) {
      this.dRef$=db.list('Data-list')
      this.DataRef$=this.dRef$.valueChanges();
  }

  logout(){
    this.afauth.auth.signOut()
    .then(res=>{
      this.google.loggin=false;
      console.log(res);
      this.navCtrl.setRoot(LoginPage);
    })
  }


  add(data:Data){
    this.dRef$.push({
      name:this.data.fname,
      lname:this.data.lname,
      age:this.data.age,
      sex:this.data.sex,
      height:this.data.height,
      weight:this.data.weight,
      goal:this.data.goal,
      activity:this.data.activity,
      am:this.data.am,
      fat:this.data.fat,
      tdee:this.data.tdee,
      });
  }
  // submit(){
  //   this.afauth.authState.subscribe(auth=>{
  //     this.db.object('/profile/${auth.uid}').set(this.profile)
  //   })
  // }
}

