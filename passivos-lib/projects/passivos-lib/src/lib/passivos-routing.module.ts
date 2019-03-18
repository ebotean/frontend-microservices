import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassivosComponent } from './passivos/passivos.component';

const routes: Routes = [
  { path: 'passivos', component: PassivosComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PassivosRoutingModule { }
