import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../service/main-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm = new FormGroup({
    emailId: new FormControl(),
    password: new FormControl()
  });

  constructor(public mainservice: MainServiceService, private toastr: ToastrService,
    private route: ActivatedRoute,
  public router: Router) {
    let token:any =this.route.snapshot.params['id'];
    console.log(token,'sjkdfhdfksdjhfdskfj');
    if (token!=undefined && token!=null && token!='') {
      let val:any = jwt_decode.default(token);
      console.log(val,"jwt_decode")
      this.mainservice.setSessionData('token',token)
      this.mainservice.setSessionData('Permission',val?.role)
      this.router.navigate(['/Home'])
    }
  }

  onFormSubmit() {
    this.FORM_CHECK_VALUE(this.userForm.value).then((res: any) => {
      if (res == true) {
        this.toastr.error('Please check some input filed is empty...');
        return;
      } else {
        this.mainservice.getUser(this.userForm.value).subscribe((user: any) => {
          console.log(user, 'sdfhsdfksdjfhdskfjdsfds')
          if (user?.emailIdVerified == true) {
            this.mainservice.login(this.userForm.value).subscribe((res: any) => {
              console.log(res, 'hfhffgffg')
              if (res?.docs?.token != null && res?.docs?.token != undefined) {
                console.log(res, 'token')
                this.toastr.success('Sucessfully Login...');
                this.mainservice.setSessionData('token', res?.docs?.token)
                this.router.navigate(['/Home'])
              }
            })
          }else{
            this.toastr.error('Your email id not verfied please check your email id....');
          }
        })
      }
    })
    console.log(this.userForm, 'sdsgjdfgsdfdf')
  }

  async FORM_CHECK_VALUE(value: any) {
    let tempbol: boolean = false;
    for (const key in value) {
      console.log(value)
      if (value[key] == '' || value[key] == null || value[key] == undefined) {
        tempbol = true;
        break;
      }
    }
    return await tempbol;
  }
}
