import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy {

  destroyed$: Subject<boolean> = new Subject<boolean>();
  translateService: TranslateService;

  constructor(
    public injector: Injector
  ) {
    this.translateService = injector.get(TranslateService);
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  ngOnInit() {
    this.init();
  }
  init() {
  }
}
