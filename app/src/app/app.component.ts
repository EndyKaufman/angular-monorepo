import { Component, Injector } from '@angular/core';
import { BaseAppComponent, BaseAppService } from '@lib/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseAppComponent {
  title = 'app';
  languages = [{
    code: 'lang',
    title: 'lang',
    dic: {
      'Text to translate': 'Translated text'
    }
  }];
  defaultLang = 'lang';
  public baseAppService: BaseAppService;
  constructor(injector: Injector) {
    super(injector);
    this.baseAppService = injector.get(BaseAppService);
  }
  get newTitle() {
    return this.baseAppService.translatedText();
  }
  init() {
    this.translateService.addLangs(this.languages.map(lang => lang.code));
    this.languages.filter(lang => lang.dic).map(lang => this.translateService.setTranslation(lang.code, lang.dic));
    this.translateService.setDefaultLang(this.defaultLang);
    this.translateService.use(this.defaultLang);
  }
}
