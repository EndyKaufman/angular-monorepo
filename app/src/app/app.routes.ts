import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/lazy', pathMatch: 'full' },
  {
    path: 'lazy',
    loadChildren: './lazy/app-lazy.module#AppLazyModule'
  }
];
