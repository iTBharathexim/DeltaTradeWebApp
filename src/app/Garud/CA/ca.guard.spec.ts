import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cAGuard } from './ca.guard';

describe('cAGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cAGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
