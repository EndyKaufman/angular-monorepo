import { Component, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var BaseAppComponent = (function () {
    function BaseAppComponent(injector) {
        this.title = 'base app';
        this.translateService = injector.get(TranslateService);
    }
    BaseAppComponent.prototype.ngOnDestroy = function () {
    };
    BaseAppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    BaseAppComponent.prototype.init = function () {
    };
    return BaseAppComponent;
}());
export { BaseAppComponent };
BaseAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: ''
            },] },
];
/** @nocollapse */
BaseAppComponent.ctorParameters = function () { return [
    { type: Injector, },
]; };
//# sourceMappingURL=app.component.js.map