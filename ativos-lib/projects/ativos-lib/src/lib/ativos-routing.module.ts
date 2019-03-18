import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosComponent } from './ativos/ativos.component';

const routes: Routes = [
  { path: 'ativos', component: AtivosComponent }
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
export class AtivosRoutingModule { }
