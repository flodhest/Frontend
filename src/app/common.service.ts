// common.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  openSnackBar() {
    this.snackBar.open('This is a SnackBar!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  openModal() {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: { message: 'This is a Modal!' }
    });
  }
}
