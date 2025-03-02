import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { TokenService } from '@core/service/token.service';
import { TranslateModule } from '@ngx-translate/core';
import { EnvelopeComponent } from '@shared/component/icons/svg-envelope/svg-google.component';
import { SvgGithubComponent } from '@shared/component/icons/svg-github/svg-github.component';
import { GoogleComponent } from '@shared/component/icons/svg-google/svg-google.component';
import { LanguageSwitcherComponent } from '@shared/component/language-switcher/language-switcher.component';
import * as CONST from '@shared/util/const';
import { authResponse } from './login.model';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    GoogleComponent,
    SvgGithubComponent,
    EnvelopeComponent,
    RouterLink,
    LanguageSwitcherComponent,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  auth = inject(AuthService);
  tokenStorage = inject(TokenService);

  loginForm: FormGroup;
  lan = CONST.LANG;
  path = window.location.pathname.split('/')[1];

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const route =
      this.path === CONST.CLIENT_ROUTES.auth.signIn
        ? CONST.SERVER_ROUTES.auth.singIn
        : CONST.SERVER_ROUTES.auth.singUp;

    const { email, password } = this.loginForm.value;
    this.auth.login<authResponse>(route, { email, password }).subscribe({
      next: (data: authResponse) => {
        console.log(data);
        this.tokenStorage.setToken(data.token);
        this.router.parseUrl('home');
      },
      error: (err) => console.log('Got an error: ', err),
    });
  }
}
