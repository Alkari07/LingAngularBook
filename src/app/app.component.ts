import { Component } from '@angular/core';
import { ProductService } from './product.service';

//aplication wide services
//@ decorator symbol actually compiles to a function call in javascript
@Component({
  selector: 'app-root',
  //binding with moustache braces is called "interpolation"
  //the button is disabled if the isValid variable is set to false
  template: `<h1>{{title}}</h1>
  <img src = "{{imageUrl}}"/>
  <products></products>
  <rating></rating>
  <p><br/></p>
  <button class="btn btn-primary" [class.disabled]="!isValid"
  (click)="onClickMe($event)">
  Submit</button>`,
  providers: [ProductService]
})
export class AppComponent {
  title = 'Hello World Test';
  //can also explicitly declare the type like:
  //title: string = 'Hello World'
  imageUrl: string = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid=true;

  onClickMe($event){
    console.log("Clicked", $event);
  }
}
