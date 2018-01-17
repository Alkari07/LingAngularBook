import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ./ indicates current direcotry (relative path)
import {ProductsComponent} from './products.component';
import {RatingComponent} from './rating.component';

//@NgModule decorator is what makes this a module
@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
