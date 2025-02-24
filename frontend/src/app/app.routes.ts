import { Routes } from '@angular/router';
import { authRouteGuard } from './core/guard/auth-route.guard';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authRouteGuard],
  },
  { path: '**', component: LoginComponent },
];
