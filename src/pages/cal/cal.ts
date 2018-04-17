import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Data } from "../../models/data"
import {AngularFireDatabase} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import{Service} from '../service'
import { HomePage } from '../home/home';
//import { FirebaseListObservable} from "angularfire2/database-deprecated";

@Component({
  selector: 'page-home',
  templateUrl: 'cal.html'
})
export class CalPage {

DataRef$:Observable<Data[]>

    constructor(public navCtrl: NavController, private service:Service){
        this.DataRef$=this.service.getServiceList()
        .snapshotChanges()
        .map(changes =>{
            return changes.map(c=>({
                key:c.payload.key,
                ...c.payload.val(),
            })); 
        });
    }

cal1(data:Data){
   

}


back(){
    this.navCtrl.push(HomePage)
  }

}