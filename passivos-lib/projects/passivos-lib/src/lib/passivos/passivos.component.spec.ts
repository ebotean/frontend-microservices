import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivosComponent } from './passivos.component';

describe('PassivosComponent', () => {
  let component: PassivosComponent;
  let fixture: ComponentFixture<PassivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
