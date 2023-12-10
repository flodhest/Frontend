import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { DebtComponent } from './debt/debt.component';
import { ExcelComponent } from './excel/excel.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'debt', component: DebtComponent },
  { path: 'excel', component: ExcelComponent },
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
