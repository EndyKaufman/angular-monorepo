import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var BaseAppService = (function () {
    function BaseAppService(injector) {
        this.translateService = injector.get(TranslateService);
    }
    BaseAppService.prototype.translatedText = function () {
        return this.translateService.instant('Text to translate');
    };
    return BaseAppService;
}());
export { BaseAppService };
BaseAppService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BaseAppService.ctorParameters = function () { return [
    { type: Injector, },
]; };
//# sourceMappingURL=app.service.js.map