import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'rbiref',
  templateUrl: './rbiref.component.html',
  styleUrls: ['./rbiref.component.scss']
})
export class RBIRefComponent implements OnInit {
  FORM_CREATE: any = [];
  FORM_CREATE_DEFAULT: any =
    {
      asdate: moment().format('YYYY-MM-DD'),
      USD: '',
      EUR: '',
      GBP: '',
      AUD: '',
      HKD: '',
      JPY: '',
      CHF: '',
      CNY: '',
      SGD: '',
      INR: '',
      Status:'',
      disabled: true
    };
  constructor(public mainservice: MainServiceService, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.mainservice.getRbiRefData().subscribe((res: any) => {
      if (res?.length == 0) {
        this.FORM_CREATE.push(this.FORM_CREATE_DEFAULT);
      } else {
        res?.forEach(element => {
          element['disabled'] = true;
        });
        if (res?.filter((item: any) => item?.asdate == moment().format('YYYY-MM-DD'))?.length != 0) {
          this.FORM_CREATE = res;
        } else {
          let temp = [this.FORM_CREATE_DEFAULT];
          res?.forEach(element => {
            temp.push(element);
          });
          this.FORM_CREATE = temp;
        }
      }
      console.log(res,this.FORM_CREATE, "getRbiRefData")

    })
  }

  onSubmit(value: any, index: any) {
    console.log(value, "onSubmit")
    if (value?._id != undefined) {
      this.mainservice.updateRbiRefData(value?._id, value).subscribe((res) => {
        console.log(res, "updateRbiRefData")
        this.ngOnInit()
      })
    } else {
      this.mainservice.postRbiRefData(value).subscribe((res) => {
        console.log(res, "postRbiRefData")
        this.ngOnInit()
      })
    }
  }

  AddNewIndex() {
    this.FORM_CREATE.push({ asdate: '', usd: '', gbp: '', eur: '' })
  }
}
