import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainServiceService } from './service/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TEST';
  
  constructor( private router: Router,public mainservice: MainServiceService){
  }
  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
         let token = this.mainservice.loadFromLocalStorage();
          console.log(event,'sdjfdjkfsdgkdfgsdfdsfd')
          if (token == null || event?.url=='/login') {
            this.mainservice.logout('token');
          }    
      }
    });
  }
}
