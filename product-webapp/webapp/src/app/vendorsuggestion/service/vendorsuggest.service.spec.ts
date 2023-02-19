import { TestBed } from '@angular/core/testing';

import { VendorsuggestService } from './vendorsuggest.service';

describe('VendorsuggestService', () => {
  let service: VendorsuggestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsuggestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
