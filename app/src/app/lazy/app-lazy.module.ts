import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLazyRoutes } from './app-lazy.routes';
import { AppLazyComponent } from './app-lazy.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterModule.forChild(AppLazyRoutes),
    TranslateModule.forChild()
  ],
  declarations: [AppLazyComponent],
  exports: [AppLazyComponent],
  entryComponents: [AppLazyComponent]
})
export class AppLazyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppLazyModule,
      providers: []
    };
  }
}
