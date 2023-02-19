import { TestBed } from '@angular/core/testing';

import { VendorUpdateService } from './vendor-update.service';

describe('VendorUpdateService', () => {
  let service: VendorUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
