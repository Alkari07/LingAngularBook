import { Component } from '@angular/core';
import { ProductService } from './product.service';

//aplication wide services
//@ decorator symbol actually compiles to a function call in javascript
@Component({
  selector: 'app-root',
  //binding with moustache braces is called "interpolation"
  template: `<h1>{{title}}</h1>
  <products></products>`,
  providers: [ProductService]
})
export class AppComponent {
  title = 'Hello World Test';
  //can also explicitly declare the type like:
  //title: string = 'Hello World'
}
