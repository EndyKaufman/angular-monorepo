import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { TestServices } from '@lib/test';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.routes';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        RouterModule.forRoot(AppRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
      ],
      providers: [
        ...TestServices
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Translated text');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Translated text');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    setTimeout(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('Translated text');
    }, 5000);
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    setTimeout(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h4').textContent).toContain('Translated text');
    }, 5000);
  }));
  it('should dynamic render title in a h1, h2, h3, h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.changeLangToOther();
    fixture.detectChanges();
    setTimeout(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Other translated text');
      expect(compiled.querySelector('h2').textContent).toContain('Other translated text');
      expect(compiled.querySelector('h3').textContent).toContain('Other translated text');
      expect(compiled.querySelector('h4').textContent).toContain('Other translated text');
    }, 5000);
  }));
});
