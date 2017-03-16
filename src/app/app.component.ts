import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
        <App-Header></App-Header>
        <router-outlet></router-outlet>
        <App-Footer></App-Footer>
    `,
  styleUrls:  ['app/app.component.css']
})
export class AppComponent  { name = 'Angular'; }
