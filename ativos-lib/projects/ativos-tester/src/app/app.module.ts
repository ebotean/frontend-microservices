import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtivosLibModule } from 'ativos-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtivosLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
