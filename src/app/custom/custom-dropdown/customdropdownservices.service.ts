import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomdropdownservicesService implements OnInit {
  CUTSOM_DROP_DOWN_DATA:any=[];
  SET_DROP_DOWN_VALUE:any=[];
  limitclass:boolean=false;
  FILTER_DATA_INUPUT:any=[];

  constructor() {
   }
   setDropDownData(key:any,data:any){
    this.CUTSOM_DROP_DOWN_DATA[key]=Object.keys(data);
   }
   getDropDownData(){
   return this.CUTSOM_DROP_DOWN_DATA;
  }
  ngOnInit(){
  }
  SetProperty:any=[]
  setProperty(data:any){
    this.SetProperty=data;
  }
  getProperty(){
    return this.SetProperty;
  }
  setdropdownvalue(key:any,value:any){
    this.SET_DROP_DOWN_VALUE[key]=value;
  }
  getdropdownvalue(key:any){
   return this.SET_DROP_DOWN_VALUE[key];
  }
}
