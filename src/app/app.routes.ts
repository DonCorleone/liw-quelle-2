import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./index/index').then(m => m.Index)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'header-section',
    loadComponent: () => import('./header-section/header-section').then(m => m.HeaderSection)
  },
  {
    path: 'ols-header',
    loadComponent: () => import('./ols-header/ols-header').then(m => m.OlsHeader)
  }
];
