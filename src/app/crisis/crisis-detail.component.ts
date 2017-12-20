import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { CrisisService,Crisis }  from './crisis.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-crisis-detail',
  template: `<div *ngIf="crisis$| async as crisis">
  <h2>{{ crisis.name | uppercase }} Details</h2>
  <div><span>id: </span>{{crisis.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </label>
  </div>
  <button (click)="goBack(crisis.id)">go back</button>
</div>`,
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.getCrisis();
  }

  getCrisis() {
    this.crisis$=this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.crisisService.getCrisis(params.get('id'));
      )
}

  goBack(id:number): void {
    this.router.navigate(['../', { id: id, foo: 'foo' }]);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/