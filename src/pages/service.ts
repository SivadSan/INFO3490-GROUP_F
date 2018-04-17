import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { Data } from "../models/data";

@Injectable()
export class Service{
    private dataref=this.db.list<Data>('Data-list')

 constructor(private db:AngularFireDatabase
    ){}

    getServiceList(){
        return this.dataref;
    }



}