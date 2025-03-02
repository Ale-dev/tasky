import { Routes } from '@angular/router';
import { authRouteGuard } from './core/guard/auth-route.guard';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CLIENT_ROUTES } from './shared/util/const';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: CLIENT_ROUTES.auth.signIn,
  },
  {
    path: CLIENT_ROUTES.home,
    component: HomeComponent,
    canActivate: [authRouteGuard],
  },
  {
    path: CLIENT_ROUTES.auth.signUp,
    component: LoginComponent,
  },
  {
    path: CLIENT_ROUTES.auth.signIn,
    component: LoginComponent,
  },
  { path: '**', component: LoginComponent },
];
