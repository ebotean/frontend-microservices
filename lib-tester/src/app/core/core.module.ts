import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
