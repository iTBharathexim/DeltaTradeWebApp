import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';

export const cAGuard: CanActivateFn = (route, state) => {
  return inject(MainServiceService).isLoggedInCA()
};
