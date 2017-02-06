import { Component , Output,Input, EventEmitter} from '@angular/core';
import {ListService} from "../services/vehicle.service";
import { VehicledetailsComponent } from '../VehicleDetails/vehicledetails.component';
import { Pipe, PipeTransform } from '@angular/core';
import {OrderBy} from "../yearSortingPipe.pipe"
import {Format} from "../formatPipe.pipe"
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
@Pipe({
  name: 'orderBy'
})
export class VehicleComponent {
  searchTerm: string = "";
  //public groceries: Grocery[];
  constructor(ListSvc:ListService) {
//this.countries = LookupSvc.countryList();
ListSvc.getVehicleListfromApi()
.subscribe((result)=>{this.Vehicles=result.Vehicles;
  console.log(JSON.stringify(result));
  },
  
  error=>{
    console.log(error);
  });


  }
  Vehicles:Array<any>;
  vehicleFlag : boolean;
  item:any;

vehicleFullList={};
vehicleDesc(item)
{
  this.vehicleFlag=true;
  this.item=item;

  
};
  // @Input() columns: any[];
  // @Input() data: any[];
  // @Input() sort: any;
  
  // selectedClass(item): void{
  //   //return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  // }
  
  // changeSorting(item): void{
  //   var sort = this.sort;
  //   if (sort == item) {
  //     sort.descending = !sort.descending;
  //   } else {
  //     sort = item;
  //     sort.descending = false;
  //   }
  // }
  
  // convertSorting(): string{
  //   return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  // }
  ascName(){    
      this.Vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }); 
      } 
      descName(){
       this.Vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;  
    });  
      } 
      ascYear(){
      this.Vehicles.sort(function(a:any,b:any){
      var textA = a.year;
      var textB = b.year;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    });   
      } 
      descYear(){
      this.Vehicles.sort(function(a:any,b:any){
      var textA = a.year;
      var textB = b.year;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;  
    });    
      } 
      ascModel(){
      this.Vehicles.sort(function(a:any,b:any){
      var textA = a.model;
      var textB = b.model;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    });   
      }
      descModel(){
       this.Vehicles.sort(function(a:any,b:any){
      var textA = a.model;
      var textB = b.model;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;  
    });  
      }
  }



