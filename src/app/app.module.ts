import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatPaginatorModule} from '@angular/material';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { BankDataSource } from './components/table-data/table-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankServicesService } from './services/bank-services.service';
import { SearchBanksComponent } from './components/search-banks/search-banks.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    SearchBanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule,
    MatCardModule,
    StorageServiceModule
  ],
  providers: [BankServicesService, SearchBanksComponent, TableDataComponent, BankDataSource],
  bootstrap: [AppComponent],
  entryComponents: [TableDataComponent]
})
export class AppModule { }
