import { TestBed } from '@angular/core/testing';

import { VendorsuggestionService } from './vendorsuggestion.service';

describe('VendorsuggestionService', () => {
  let service: VendorsuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
