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
ref: any;
    constructor(public navCtrl: NavController, private service:Service){
        this.service.getServiceList()
        .snapshotChanges()
        .subscribe((changes) =>{
           // console.log(changes.payload.val());
            this.ref=changes.payload.val();
            // return changes.map(c=>({
                //console.log(this.ref);
                let newref = changes.payload.forEach((child) => {
                    //console.log(child.val());
                    let ref=child.val();
                    console.log(ref.weight)
                    var x=Number(ref.weight)+2;
                    console.log(x);
                    return true;
                })
            //     key:c.payload.key,
            //     ...c.payload.val(),

            // })); 
        });
    }




back(){
    this.navCtrl.push(HomePage)
  }

}