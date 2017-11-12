import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseAppComponent } from './app.component';
var BaseAppModule = (function () {
    function BaseAppModule() {
    }
    BaseAppModule.forRoot = function () {
        return { ngModule: BaseAppModule };
    };
    return BaseAppModule;
}());
export { BaseAppModule };
BaseAppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BaseAppComponent
                ],
                imports: [
                    BrowserModule
                ],
                providers: [],
                bootstrap: [BaseAppComponent]
            },] },
];
/** @nocollapse */
BaseAppModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map