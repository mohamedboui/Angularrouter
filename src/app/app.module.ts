import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule }  from './heroes/hero.module';
import { CrisisesModule }  from './crisis/crisis.module';
import { ComposeMessageComponent }  from './compose-message.component';
import { FormsModule }    from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
  FormsModule,
  	HeroesModule,
    CrisisesModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
