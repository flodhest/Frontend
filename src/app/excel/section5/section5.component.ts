import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [],
  templateUrl: './section5.component.html',

})
export class Section5Component {
  completeTutorial() {
    alert('Tutorial completed! 🚀');
  }
}
