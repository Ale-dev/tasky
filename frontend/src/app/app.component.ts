import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as CONST from '@shared/util/const';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tasky';
  availableLangs = CONST.LANG;

  constructor(private translate: TranslateService) {}

  async ngOnInit() {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      this.translate.use(storedLang);
    } else {
      const browserLang =
        this.translate.getBrowserLang() || CONST.DEFAULT_LANG_CODE;
      const defaultLang = this.availableLangs.some((v) => v.code == browserLang)
        ? browserLang
        : CONST.DEFAULT_LANG_CODE;
      this.translate.use(defaultLang);
      localStorage.setItem('language', defaultLang);
    }
  }
}
