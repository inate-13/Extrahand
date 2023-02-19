import { TestBed } from '@angular/core/testing';

import { AvailableServicesService } from './available-services.service';

describe('AvailableServicesService', () => {
  let service: AvailableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
