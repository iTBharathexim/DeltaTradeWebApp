import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { buyerAggregatorGuard } from './buyer-aggregator.guard';

describe('buyerAggregatorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => buyerAggregatorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
