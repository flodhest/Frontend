import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponents } from './grid/grid.components';
import { DebtComponent } from './debt/debt.component';
import { ExcelComponent } from './excel/excel.component';
import { Section1Component } from './excel/section1/section1.component';
import { Section2Component } from './excel/section2/section2.component';
import { Section3Component } from './excel/section3/section3.component';
import { Section4Component } from './excel/section4/section4.component';
import { Section11Component } from './excel/section11/section11.component';
import { Section5Component } from './excel/section5/section5.component';
import { Section14Component } from './excel/section14/section14.component';
// Exempel från AppRoutingModule
// Exempel från AppRoutingModule
const routes: Routes = [
  { path: 'grid', component: GridComponents },
  { path: 'debt', component: DebtComponent },
  { path: 'ovrigt', component: DebtComponent },
  {
    path: 'excel',
    component: ExcelComponent,
    children: [
      { path: 'section1', component: Section1Component, data: { title: 'Sektion 1' } },
      { path: 'section2', component: Section2Component, data: { title: 'Sektion 2' } },
      { path: 'section3', component: Section3Component, data: { title: 'Sektion 3' } },
      { path: 'section4', component: Section4Component, data: { title: 'Sektion 4' } },
      { path: 'section5', component: Section5Component, data: { title: 'Sektion 5' } },
      { path: 'section11', component: Section11Component, data: { title: 'Sektion 11' } },
      { path: 'section14', component: Section14Component, data: { title: 'Sektion 14' } },
      { path: '', redirectTo: 'section1', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
