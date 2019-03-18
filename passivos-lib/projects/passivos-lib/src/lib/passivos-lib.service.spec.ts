import { TestBed } from '@angular/core/testing';

import { PassivosLibService } from './passivos-lib.service';

describe('PassivosLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassivosLibService = TestBed.get(PassivosLibService);
    expect(service).toBeTruthy();
  });
});
