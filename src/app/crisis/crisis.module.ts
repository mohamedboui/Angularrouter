import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisHomeComponent }    from './crisis-home.component';
import { CrisisService } from './crisis.service';

import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisHomeComponent,
  ],
  providers: [ CrisisService ]
})
export class CrisisesModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/