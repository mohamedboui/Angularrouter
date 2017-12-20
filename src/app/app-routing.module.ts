import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {ComposeMessageComponent} from './compose-message.component';

const routes:Routes=[

  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
  { path: '**', component: PageNotFoundComponent }]
@NgModule({
  imports: [
        RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
