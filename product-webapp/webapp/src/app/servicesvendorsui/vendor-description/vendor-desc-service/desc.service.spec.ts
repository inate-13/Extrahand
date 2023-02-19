import { TestBed } from '@angular/core/testing';

import { DescService } from './desc.service';

describe('DescService', () => {
  let service: DescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
