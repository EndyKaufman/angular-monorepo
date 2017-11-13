import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class BaseAppService {
    public translateService: TranslateService;
    constructor(injector: Injector) {
        this.translateService = injector.get(TranslateService);
    }
    translatedText() {
        return this.translateService.instant('Text to translate');
    }
}
