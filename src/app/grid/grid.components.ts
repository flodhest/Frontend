import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Add this line


/* Animation definition */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.components.html',
  styleUrls: ['./grid.components.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', animate('500ms ease-out')),
      transition('hidden => visible', animate('500ms ease-in'))
    ])
  ]
})
export class GridComponents {
  // Your component logic goes here
}
