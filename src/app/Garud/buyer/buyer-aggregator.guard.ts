import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { MainServiceService } from '../../service/main-service.service';
import { inject } from '@angular/core';

export const buyerAggregatorGuard: CanActivateFn = (route, state) => {
  return inject(MainServiceService).isLoggedIn_BUYERCREDIT()
};


