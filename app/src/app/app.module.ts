import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { TestServices } from '@lib/test';
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    }),
    RouterModule.forRoot(AppRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ...TestServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
