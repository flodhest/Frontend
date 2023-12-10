import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss'],

})
export class DebtComponent implements OnInit, OnDestroy {
  paymentStatus$: Observable<string> | undefined;
  debtId: number | undefined;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    // Initialization logic
  }

}
