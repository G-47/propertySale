import { TestBed } from '@angular/core/testing';

import { AuctionAdService } from './auction-ad.service';

describe('AuctionAdService', () => {
  let service: AuctionAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
