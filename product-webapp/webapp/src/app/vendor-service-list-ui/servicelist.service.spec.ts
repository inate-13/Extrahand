import { TestBed } from '@angular/core/testing';

import { ServicelistService } from './servicelist.service';

describe('ServicelistService', () => {
  let service: ServicelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
