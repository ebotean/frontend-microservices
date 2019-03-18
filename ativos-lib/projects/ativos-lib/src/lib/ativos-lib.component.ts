import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ais-ativos-lib',
  template: `
    <p>
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class AtivosLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
