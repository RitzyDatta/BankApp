import { Component, OnInit } from '@angular/core';
import { TableDataComponent, BankDataSource } from '../table-data/table-data.component';
import { Observable } from 'rxjs';

import { BankServicesService } from '../../services/bank-services.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-search-banks',
  templateUrl: './search-banks.component.html',
  styleUrls: ['./search-banks.component.css']
})
export class SearchBanksComponent implements OnInit {
  selected: string;
  constructor(private bankService: BankServicesService, private bankData: TableDataComponent, private app: AppComponent) { }

  ngOnInit() {
  }

  getselected() {
    return this.selected;
  }
  changeBank(event: any) {
    this.selected = event.value;
    this.bankService.setBank(this.selected);
    this.bankData.setDataSource();
  }

}
