import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipe/safe.pipe';
import {CardModule} from 'primeng/card';

import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
