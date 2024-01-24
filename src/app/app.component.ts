// app.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor() {

  }
  // Create a public getter method for commonService

  toggleSidebar() {
    // Implement your logic to toggle the sidebar here
  }
}
