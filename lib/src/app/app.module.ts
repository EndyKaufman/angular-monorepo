import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaseAppComponent } from './app.component';

@NgModule({
  declarations: [
    BaseAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseAppComponent]
})
export class BaseAppModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: BaseAppModule };
  }
}
