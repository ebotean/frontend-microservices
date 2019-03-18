import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosLibComponent } from './ativos-lib.component';

describe('AtivosLibComponent', () => {
  let component: AtivosLibComponent;
  let fixture: ComponentFixture<AtivosLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivosLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
