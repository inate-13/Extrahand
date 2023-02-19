import { TestBed } from '@angular/core/testing';

import { SenddatanavtosuggestionService } from './senddatanavtosuggestion.service';

describe('SenddatanavtosuggestionService', () => {
  let service: SenddatanavtosuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenddatanavtosuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
