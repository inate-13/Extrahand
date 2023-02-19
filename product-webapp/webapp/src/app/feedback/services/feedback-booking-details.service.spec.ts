import { TestBed } from '@angular/core/testing';

import { FeedbackBookingDetailsService } from './feedback-booking-details.service';

describe('FeedbackBookingDetailsService', () => {
  let service: FeedbackBookingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackBookingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
