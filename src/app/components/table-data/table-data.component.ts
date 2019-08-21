import { Component, OnInit, ApplicationRef, ComponentFactoryResolver, Injector, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { BankServicesService } from '../../services/bank-services.service';
import { Bank } from '../../models/bank.model';


export class BankDataSource extends DataSource<any> {
  constructor(private bankService: BankServicesService) {
    super();
  }
  connect(): Observable<Bank[]> {
    return this.bankService.getBanks();
  }
  disconnect() {}
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  dataSource: MatTableDataSource<Bank>;
  //dataSource: any;
  factory: any;
  newNode: any;
  ref: any;
  displayedColumns: any;
  public data1: Bank[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line: max-line-length
  constructor(private bankService: BankServicesService, private app: ApplicationRef, private resolver: ComponentFactoryResolver, private injector: Injector, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
   this.ref = null;

  }




  setDataSource() {
   /* if (localStorage.getItem(this.bankService.selectedBank) !== null) {
      console.log('INSIDE STORAGE');
      this.destroyView();

      const ELEMENT_DATA = JSON.parse(localStorage.getItem(this.bankService.selectedBank)) as Bank[];
     // console.log('Data: ' + localStorage.getItem(this.bankService.selectedBank));
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.displayedColumns = ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state', 'bank_name'];
      this.addDynamicComponent();
      console.log('data source value:' + this.dataSource);
      this.bankService.selectedBank = null;


    } else { */
     // this.ngOnInit();
     this.destroyView();
     this.addDynamicComponent();
   // }
    //console.log(this.dataSource);




  }
  ngOnInit() {

    if (this.bankService.selectedBank !== null) {
      console.log('inside oninit');

      this.bankService.getBanks().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.displayedColumns = ['ifsc', 'bank_id', 'branch', 'address', 'city', 'district', 'state', 'bank_name'];
        this.data1 = data;
      },
      err => {
        console.log(err);
      },
      () => {
      //  localStorage.setItem(this.bankService.selectedBank, JSON.stringify(this.data1));

      }
      );


    } else {
      document.getElementById('filter').style.display = 'none';
      document.getElementById('page').style.display = 'none';
    }


  }

  addDynamicComponent() {
    console.log('ADD DYNAMIC');
    this.factory = this.resolver.resolveComponentFactory( TableDataComponent );

    this.newNode = document.createElement('div');
   // newNode.id = 'placeholder';
    document.getElementById('table1').appendChild(this.newNode);

    this.ref = this.factory.create(this.injector, [], this.newNode);
    this.app.attachView(this.ref.hostView);
 }
  destroyView() {
    if (this.ref !==  null) {
      console.log('DESTROY');
      this.app.detachView(this.ref.hostView);
      this.ref.destroy();
    }
  }
  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    this.dataSource.filter = filterValue;

  }

}



