import { TestBed } from '@angular/core/testing';

import { AtivosLibService } from './ativos-lib.service';

describe('AtivosLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtivosLibService = TestBed.get(AtivosLibService);
    expect(service).toBeTruthy();
  });
});
