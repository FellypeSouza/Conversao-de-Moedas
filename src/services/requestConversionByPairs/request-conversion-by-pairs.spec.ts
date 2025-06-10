import { TestBed } from '@angular/core/testing';

import { RequestConversionByPairs } from './request-conversion-by-pairs';

describe('RequestConversionByPairs', () => {
  let service: RequestConversionByPairs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestConversionByPairs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
