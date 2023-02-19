import { TestBed } from '@angular/core/testing';

import { VendorSuggestionRegService } from './vendor-suggestion-reg.service';

describe('VendorSuggestionRegService', () => {
  let service: VendorSuggestionRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorSuggestionRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
