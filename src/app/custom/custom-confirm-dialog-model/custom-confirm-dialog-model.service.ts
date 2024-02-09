import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomConfirmDialogModelService {
  message:any='Dummmmmp';
  titleheader:any=[];
  INPUT_VALUES:any=[];
  CALLBACKS?:any;
  url:any='';
  constructor() { }
}
