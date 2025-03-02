import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as CONST from '@shared/util/const';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
})
export class LanguageSwitcherComponent {
  translate = inject(TranslateService);

  availableLangs = CONST.LANG;
  currentLangName = CONST.DEFAULT_LANG_NAME;
  show = false;

  constructor() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLangName = this.getLangName(savedLanguage);
    }
  }
  switchLanguage(langCode: string) {
    this.currentLangName = this.getLangName(langCode);
    this.translate.use(langCode);
    this.show = false;
    localStorage.setItem('language', langCode);
  }

  getLangName(languageCode: string): string {
    const language = this.availableLangs.find(
      (lang) => lang.code === languageCode
    );
    return language ? language.langName : '';
  }
  toggle() {
    this.show = !this.show;
  }
}
