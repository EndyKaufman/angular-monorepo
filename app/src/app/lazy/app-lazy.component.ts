import { Component, Injector } from '@angular/core';
import { BaseComponent } from '@lib/test';


@Component({
  selector: 'app-lazy',
  templateUrl: './app-lazy.component.html'
})
export class AppLazyComponent extends BaseComponent {

  constructor(
    public injector: Injector
  ) {
    super(injector);
  }
  get newLazyTitle() {
    return this.translateService.instant('Text to translate');
  }
}
