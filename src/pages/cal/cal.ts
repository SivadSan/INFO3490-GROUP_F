// import { Component} from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';
// import { NavPush } from 'ionic-angular';
// import { AngularFireAuth } from "angularfire2/auth";
// import { Data } from "../../models/data"
// import {AngularFireDatabase} from "angularfire2/database";
// import { Observable } from 'rxjs/Observable';
// import{Service} from '../service'
// import { HomePage } from '../home/home';
// import { CalcPage } from '../calc/calc';

// @Component({
//   selector: 'page-cal',
//   templateUrl: 'cal.html'
// })
// export class CalPage {

// DataRef$:Observable<Data[]>

//     constructor(public navCtrl: NavController,public NavParams: NavParams, private service:Service){
//         this.DataRef$=this.service.getServiceList()
//         .snapshotChanges()
//         .map(changes =>{
//             return changes.map(c=>({
//                 key:c.payload.key,
//                 ...c.payload.val(),
//             })); 
//         });
//     }


// back(){
//     this.navCtrl.push(HomePage)
//   }

// }