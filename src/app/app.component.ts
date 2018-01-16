import { Component } from '@angular/core';

//aplication wide services
//@ decorator symbol actually compiles to a function call in javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App Hello World Test';
}
