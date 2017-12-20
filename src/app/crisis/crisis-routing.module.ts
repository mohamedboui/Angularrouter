import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisHomeComponent } 		from './crisis-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

const crisisCenterRoutes: Routes = [
      {
        path: 'crisises',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisHomeComponent
          }
        ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }