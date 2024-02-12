import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'BenchMarks',
  templateUrl: './BenchMarks.component.html',
  styleUrls: ['./BenchMarks.component.scss']
})
export class BenchMarksComponent implements OnInit {
  FORM_CREATE: any = [];
  FORM_CREATE_DEFAULT: any = [
    {
      TBILL: "REPO_RATE",
      asdate: moment().format('YYYY-MM-DD'),
      Status: "",
      "rate": "",
      "1M": "",
      "3M": "",
      "6M": "",
      "12M": "",
      disabled: true
    }, {
      TBILL: "EURIBOR",
      asdate: moment().format('YYYY-MM-DD'),
      Status: "",
      "rate": "",
      "1M": "",
      "3M": "",
      "6M": "",
      "12M": "",
      disabled: true
    }, {
      TBILL: "MIBOR_OVERNIGHT",
      asdate: moment().format('YYYY-MM-DD'),
      Status: "",
      "rate": "",
      "1M": "",
      "3M": "",
      "6M": "",
      "12M": "",
      disabled: true
    }, {
      TBILL: "SOFAR",
      asdate: moment().format('YYYY-MM-DD'),
      Status: "",
      "rate": "",
      "1M": "",
      "3M": "",
      "6M": "",
      "12M": "",
      disabled: true
    }, {
      TBILL: "SONIA",
      asdate: moment().format('YYYY-MM-DD'),
      Status: "",
      "rate": "",
      "1M": "",
      "3M": "",
      "6M": "",
      "12M": "",
      disabled: true
    }];
  constructor(public mainservice: MainServiceService, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.mainservice.getBenchMarksData({ currentdate: moment().format('YYYY-MM-DD') }).subscribe((res: any) => {
      if (res?.length == 0) {
        this.FORM_CREATE=this.FORM_CREATE_DEFAULT;
      } else {
        this.FORM_CREATE = [
          res?.length >= 1 ? { ...res[0]?.REPO_RATE, _id: res[0]?._id } : this.FORM_CREATE_DEFAULT[0],
          res?.length >= 2 ? { ...res[1]?.EURIBOR, _id: res[1]?._id } : this.FORM_CREATE_DEFAULT[1],
          res?.length >= 3 ? { ...res[2]?.MIBOR_OVERNIGHT, _id: res[2]?._id } : this.FORM_CREATE_DEFAULT[2],
          res?.length >= 4 ? { ...res[3]?.SOFAR, _id: res[3]?._id } : this.FORM_CREATE_DEFAULT[3],
          res?.length >= 5 ? { ...res[4]?.SONIA, _id: res[4]?._id } : this.FORM_CREATE_DEFAULT[4],
        ]
        this.FORM_CREATE?.forEach(element => {
          element["disabled"] = true;
        });
      }
      console.log(res, res?.length >= 3, this.FORM_CREATE, "getBenchMarksData")
    })
  }

  onSubmit(value: any, index: any) {
    console.log(value, "onSubmit")
    if (value?._id != undefined) {
      let data: any = { [value?.TBILL]: value };
      this.mainservice.updateBenchMarksData(value?._id, data).subscribe((res) => {
        console.log(res, "updateBenchMarksData")
        this.ngOnInit()
      })
    } else {
      let data: any = { [value?.TBILL]: value, currentdate: moment().format('YYYY-MM-DD') };
      this.mainservice.postBenchMarksData(data).subscribe((res) => {
        console.log(res, "postRbiRefData")
        this.ngOnInit()
      })
    }
  }

  AddNewIndex() {
    this.FORM_CREATE.push({ asdate: '', usd: '', gbp: '', eur: '' })
  }
}
