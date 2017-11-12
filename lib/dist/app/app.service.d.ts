import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class BaseAppService {
    translateService: TranslateService;
    constructor(injector: Injector);
    translatedText(): any;
}
