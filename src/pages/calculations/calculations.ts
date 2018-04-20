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
  selector: 'page-calculations',
  templateUrl: 'calculations.html'
})
export class CalculationPage {
private BMR: Array<any>;
private DMC: Array<any>;
private DPI: Array<any>;
private DFI: Array<any>;
private DCI: Array<any>
ref: any;
    constructor(public navCtrl: NavController, private service:Service){
        this.BMR = [];
        this.DMC = [];
        this.DPI = [];
        this.DFI = [];
        this.DCI = [];

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
                    console.log(ref.weight);
                    var age=parseInt(ref.age)
                    console.log(age);
                    var x=Number(ref.weight)*10+6.25*Number(ref.height)-(5*age)+5;
                    
                    console.log(x);
                    this.BMR.push(x);
                    
                    var a=Number(ref.activity)*x;
                    this.DMC.push(a);
                    
                    var b=Number(ref.am)*Number(ref.weight)*4;
                    console.log(b);
                    this.DPI.push(b);

                     var c=(a*Number(ref.fat))/9;
                     this.DFI.push(c);

                     var d=a-(b+c)/4;
                     this.DCI.push(d);


                    
                    return true;
                })
            //     key:c.payload.key,
            //     ...c.payload.val(),

            // })); 
        });
    }




back(){
    this.navCtrl.setRoot(HomePage)
  }

}

//Number(Date.now())-Number(ref.DoB)
//Number(ref.weight)*10+6.25*Number(ref.height)-5*