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
  },
  {
    path: 'icons',
    loadComponent: () => import('./icons/icons').then(m => m.default)
  },
  {
    path: 'effects',
    loadComponent: () => import('./effects/effects').then(m => m.default)
  },
  {
    path: 'focus',
    loadComponent: () => import('./focus/focus').then(m => m.default)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid').then(m => m.default)
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion').then(m => m.default)
  },
  {
    path: 'stepper',
    loadComponent: () => import('./stepper/stepper').then(m => m.default)
  }
];
