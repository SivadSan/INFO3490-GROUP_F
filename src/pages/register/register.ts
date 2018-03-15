import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user ={} as User;

  constructor( private auth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user:User){
    const result =this.auth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(result);
  }
  catch(e){
    console.error(e);

  }

}
