import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app'
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    google={
    loggin:false,
    name:'',
    email:''
}
  user ={} as User;
  
  constructor(
    private afauth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  login(user: User){
    try{
      const result=this.afauth.auth.signInAndRetrieveDataWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.navCtrl.push(LoginPage);
      }
    }
    catch(e){
      console.error(e);
    }

  }

  loginwithGoogle(){
      this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res=>{
        this.google.loggin=true;
        console.log(res);
        this.navCtrl.setRoot(HomePage);
      })
      // if(result){
      //   this.navCtrl.setRoot(HomePage);
      // }
  }

  logout(){
    this.afauth.auth.signOut();
  }
  register(){
    this.navCtrl.push(RegisterPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
