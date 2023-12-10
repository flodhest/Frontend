import { Component } from '@angular/core';

import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {


  constructor(private snackBar: MatSnackBar) {

  }

  resetForm(): void {

  }

  createNewGrid(): void {

  }

}
