import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { Data } from "../models/data";

@Injectable()
export class Service{
    private dataref=this.db.object('Data-list')

 constructor(private db:AngularFireDatabase
    ){}

    getServiceList(){
        this.dataref.snapshotChanges().subscribe((data) => {
            console.log(data);
        })
        return this.dataref;
    }



}