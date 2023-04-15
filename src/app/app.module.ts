import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HttpClientModule } from "@angular/common/http";
import { RestServiceService } from "./rest-service.service";
import {FormsModule} from "@angular/forms";

import { TableModule } from 'primeng/table';

import {TreeTableModule} from 'primeng/treetable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    TreeTableModule,
  ],
  providers: [RestServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
