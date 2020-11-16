import { TestBed } from '@angular/core/testing';

import { MainStreamService } from './main-stream.service';

describe('MainStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainStreamService = TestBed.get(MainStreamService);
    expect(service).toBeTruthy();
  });
});
