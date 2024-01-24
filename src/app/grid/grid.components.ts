// grid.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.components.html',
  styleUrls: ['./grid.components.scss']
})
export class GridComponents {

  constructor() {
    this.title = ''; // Initialize title
    this.description = ''; // Initialize description
  }

  title: string;
  description: string;


}
