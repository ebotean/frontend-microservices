import { NgModule } from '@angular/core';

import { PassivosLibComponent } from './passivos-lib.component';
import { PassivosRoutingModule } from './passivos-routing.module';
import { PassivosComponent } from './passivos/passivos.component';

@NgModule({
  declarations: [
    PassivosLibComponent, 
    PassivosComponent
  ],
  imports: [
    PassivosRoutingModule
  ],
  exports: [
    PassivosRoutingModule,
    PassivosLibComponent,
    PassivosComponent
  ]
})
export class PassivosLibModule { }
