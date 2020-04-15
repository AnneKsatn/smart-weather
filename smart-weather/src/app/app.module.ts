import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayComponent } from './day/day.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularYandexMapsModule.forRoot('658f67a2-fd77-42e9-b99e-2bd48c4ccad4')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
