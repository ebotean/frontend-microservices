import { NgModule } from '@angular/core';
import { AtivosLibComponent } from './ativos-lib.component';
import { AtivosComponent } from './ativos/ativos.component';
import { AtivosRoutingModule } from './ativos-routing.module';

@NgModule({
  declarations: [
    AtivosLibComponent, 
    AtivosComponent
  ],
  imports: [
    AtivosRoutingModule
  ],
  exports: [
    AtivosLibComponent,
    AtivosComponent
  ]
})
export class AtivosLibModule { }
