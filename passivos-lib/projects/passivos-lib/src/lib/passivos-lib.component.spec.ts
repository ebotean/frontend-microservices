import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivosLibComponent } from './passivos-lib.component';

describe('PassivosLibComponent', () => {
  let component: PassivosLibComponent;
  let fixture: ComponentFixture<PassivosLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivosLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
