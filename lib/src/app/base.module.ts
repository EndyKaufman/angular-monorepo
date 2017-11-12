import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: BaseModule };
  }
}
