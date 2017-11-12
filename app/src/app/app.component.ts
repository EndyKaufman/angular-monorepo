import { Component, Injector } from '@angular/core';
import { BaseAppComponent, BaseAppService } from '@lib/test';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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
  constructor(
    public injector: Injector,
    public router: Router
  ) {
    super(injector);
    this.baseAppService = injector.get(BaseAppService);
    router.events.takeUntil(this.destroyed$).subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        document.body.scrollTop = 0;
      }
    });
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
