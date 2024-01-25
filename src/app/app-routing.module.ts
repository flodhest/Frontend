import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponents } from './grid/grid.components';

const routes: Routes = [
  { path: 'grid', component: GridComponents },
  // { path: '', redirectTo: '/grid', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
