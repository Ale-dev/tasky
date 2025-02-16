import { Component } from '@angular/core';
import { GoogleComponent } from '../../shared/component/icons/svg-google/svg-google.component';

@Component({
  selector: 'app-login',
  imports: [GoogleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
