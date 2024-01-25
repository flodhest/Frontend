// Inside your app.component.ts file
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {}

  sendEmail() {
    window.location.href = 'mailto:info@pinkishherd.se';
  }
}
