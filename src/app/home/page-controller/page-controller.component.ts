import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-controller',
  templateUrl: './page-controller.component.html',
  styleUrls: ['./page-controller.component.scss']
})
export class PageControllerComponent implements OnInit {
  data: any = [];
  ROUTER_URL:any=''
  constructor(public mainservice: MainServiceService, private toastr: ToastrService,private actRoute: ActivatedRoute) {
  
  }

  ngOnInit(): void { 
    this.actRoute.paramMap.subscribe((params:any) => {
       this.ROUTER_URL=params.get('id');
      console.log(params.get('id'),"params.get('id')?")
    });
  }
}
