import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/service/authService/auth.service';
import { TokenService } from '../../core/service/tokenStorage/token.service';
import { EnvelopeComponent } from '../../shared/component/icons/svg-envelope/svg-google.component';
import { SvgGithubComponent } from '../../shared/component/icons/svg-github/svg-github.component';
import { GoogleComponent } from '../../shared/component/icons/svg-google/svg-google.component';
import * as CONST from '../../shared/utils/const';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    GoogleComponent,
    SvgGithubComponent,
    EnvelopeComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginForm!: FormGroup;
  lan = CONST.LAN;
  default = CONST.DEFAULT_LAN;

  constructor(
    private auth: AuthService,
    private tokenStorage: TokenService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(CONST.DEFAULT_LAN);
    this.translate.use(CONST.DEFAULT_LAN);
  }

  useLanguage(language: any): void {
    this.translate.use(language.value);
  }

  signUp() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.auth.signUp({ email, password }).subscribe((data) => {
      this.tokenStorage.setToken(data.token);
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }
}
