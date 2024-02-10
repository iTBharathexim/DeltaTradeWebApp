import { Injectable } from '@angular/core';
import { AppConfig } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  AppConfig: any;
  USER_DATA: any = [];

  constructor(public http: HttpClient, public router: Router) {
    this.AppConfig = AppConfig;
    console.log(AppConfig, 'sdhsgdhsfdshgdfsdhgs')
    this.getUserDetail().then((res: any) => {
      this.USER_DATA = res?.result;
      console.log(this.USER_DATA, "getUserDetail")
    })
  }

  login(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken, data);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + btoa(data.emailId + ":" + data.password),
      }),
    };
    console.log('httpOptions');
    console.log(httpOptions);
    return this.http.post(`${AppConfig?.BASE_URL}/authenticate/SingIn`, null, httpOptions);
  }

  getUser(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.BASE_URL}/authenticate/getUser`, data);
  }

  postRbiRefData(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.DELTA_TRADE_BASE_URL}/RBIRef/post`, data);
  }

  updateRbiRefData(id, data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.DELTA_TRADE_BASE_URL}/RBIRef/update`, { id: id, data: data });
  }

  getRbiRefData() {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.get(`${AppConfig?.DELTA_TRADE_BASE_URL}/RBIRef/get`);
  }
  
  
  postBenchMarksData(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.DELTA_TRADE_BASE_URL}/BenchMarks/post`, data);
  }

  updateBenchMarksData(id, data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.DELTA_TRADE_BASE_URL}/BenchMarks/update`, { id: id, data: data });
  }

  getBenchMarksData(data:any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    return this.http.post(`${AppConfig?.DELTA_TRADE_BASE_URL}/BenchMarks/get`,data);
  }

  getUserDetail() {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: authToken }),
    };
    return this.http.get(`${AppConfig?.BASE_URL}/user/profile`, httpOptions).toPromise();
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    return token;
  }
  public getloadFromLocalStorage(key: any) {
    const token: any = sessionStorage.getItem(key);
    return token;
  }
  setSessionData(key: any, data: any) {
    sessionStorage.setItem(key, data);
  }
  getSessionData(key: string) {
    var temp: any = sessionStorage.getItem(key);
    return temp != undefined && temp != 'undefined' && temp != null ? JSON.parse(temp) : null;
  }
  logout(key: any) {
    sessionStorage.removeItem(key);
    sessionStorage.removeItem('Permission');
    window.open(AppConfig?.REDIRECT_URL, "_self");
  }

  // buyer_beneficiary_creditget() {
  //   let authToken: any = this.loadFromLocalStorage();
  //   console.log(authToken);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ Authorization: authToken }),
  //   };
  //   return this.http.get(`${AppConfig?.BASE_URL}/buyer_beneficiary_credit/getAll`, httpOptions);
  // }

  buyer_beneficiary_credit_update(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: authToken }),
    };
    return this.http.post(`${AppConfig?.BASE_URL}/buyer_beneficiary_credit/update`, data, httpOptions);
  }

  Url_Change_Authorization(name_url: any) {
    this.router.navigate([name_url]);
  }

  isLoggedIn_BUYERCREDIT(): any {
    let role: any = this.getloadFromLocalStorage('Permission') != null ? this.getloadFromLocalStorage('Permission') : [];
    console.log(role == 'Buyer Credit Aggregator' ? true : this.FALSE())
    return role == 'Buyer Credit Aggregator' ? true : this.FALSE();
  }

  isLoggedInCA(): any {
    let role: any = this.getloadFromLocalStorage('Permission') != null ? this.getloadFromLocalStorage('Permission') : [];
    console.log(role == 'CA' ? true : this.FALSE())
    return role == 'CA' ? true : this.FALSE();
  }

  FALSE() {
    this.Url_Change_Authorization('/authorization');
    return false;
  }
}
