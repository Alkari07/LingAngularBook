import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProductsComponent} from './products.component';

//@NgModule decorator is what makes this a module
@NgModule({
  declarations: [
    AppComponent, ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
