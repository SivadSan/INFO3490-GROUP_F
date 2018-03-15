import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'cal.html'
})
export class CalPage {

DataRef$:AngularFireList<any>

    constructor(public navCtrl: NavController, private db:AngularFireDatabase){
         this.DataRef$=this.db.list('Data-list');
    }

}