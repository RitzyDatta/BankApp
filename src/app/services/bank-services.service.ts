import { Injectable, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from '../models/bank.model';



@Injectable({
  providedIn: 'root'
})
export class BankServicesService {

  serviceUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=';
  selectedBank: string = null;

  constructor(private http: HttpClient) {
    //this.selectedBank = 'KOLKATA';
  }

  getBanks(): Observable<Bank[]> {
    console.log(this.selectedBank);
    console.log(this.http.get<Bank[]>(`${this.serviceUrl}${this.selectedBank}`));
    return this.http.get<Bank[]>(`${this.serviceUrl}${this.selectedBank}`);
  }

  setBank(data: string) {
    this.selectedBank = data;
  }
}
