import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CrisisListComponent }   from './crisis-list.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule }  from './heroes/hero.module';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
  	HeroesModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
