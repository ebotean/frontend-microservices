import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';

const routes = [
  {path: '', component: HomePageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
