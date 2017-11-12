import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: ''
})
export class BaseAppComponent implements OnInit, OnDestroy {
  title = 'base app';
  public translateService: TranslateService;
  constructor(injector: Injector) {
    this.translateService = injector.get(TranslateService);
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.init();
  }
  init() {
  }
}
