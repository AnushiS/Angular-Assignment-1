import { Component , Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {
  constructor() {



  }
   @ Input() vehicleDataDesc:any = {};

//selectedCountry:Array<any>;


} 


