import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  template: ''
})
export class BaseAppComponent extends BaseComponent {
  title = 'base app';
}
