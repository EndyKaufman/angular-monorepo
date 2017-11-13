import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class BaseAppService {
    static langs = [{
        code: 'otherLang',
        title: 'otherLang',
        dic: {
            'Text to translate': 'Other translated text'
        }
    }];
    public translateService: TranslateService;
    constructor(injector: Injector) {
        this.translateService = injector.get(TranslateService);
    }
    translatedText() {
        return this.translateService.instant('Text to translate');
    }
}
