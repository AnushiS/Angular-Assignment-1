import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ListService{
constructor(public httpSvc:Http){}


getVehicleListfromApi():Observable<any>{
    return this.httpSvc.get("./app/api/VehicleList.json")
    .map((response)=>response.json())
    .catch((error)=>Observable.throw(error.json()));
}
}