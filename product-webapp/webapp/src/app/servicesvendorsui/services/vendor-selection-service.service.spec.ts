import { TestBed } from '@angular/core/testing';

import { VendorSelectionServiceService } from './vendor-selection-service.service';

describe('VendorSelectionServiceService', () => {
  let service: VendorSelectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorSelectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
