import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/authService/auth.service';
import { TokenService } from '../../core/service/tokenStorage/token.service';
import { GoogleComponent } from '../../shared/component/icons/svg-google/svg-google.component';
import { SvgWarningComponent } from '../../shared/component/icons/svg-warning/svg-warning.component';

@Component({
  selector: 'app-login',
  imports: [GoogleComponent, ReactiveFormsModule, SvgWarningComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginForm!: FormGroup;
  errors = [];

  constructor(private auth: AuthService, private tokenStorage: TokenService) {}

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
