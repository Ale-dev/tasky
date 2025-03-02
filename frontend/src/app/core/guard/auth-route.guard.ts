import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@core/service/token.service';
import { CLIENT_ROUTES } from '@shared/util/const';

export const authRouteGuard: CanActivateFn = (route, state) => {
  const tokenStorage = inject(TokenService);
  const token = tokenStorage.getToken();
  const router: Router = inject(Router);

  if (!token) {
    return router.parseUrl(CLIENT_ROUTES.auth.signIn);
  }

  return true;
};
