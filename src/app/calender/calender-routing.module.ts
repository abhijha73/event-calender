import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderHomeComponent } from './calender-home/calender-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: CalenderHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
