import { Routes } from '@angular/router';
import { PageA } from './pages/page-a/page-a';
import { MAGIC_NUMBER } from './tokens/magic-number.token';

export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  { path: 'page-a', component: PageA },
  { path: 'page-b/:id', loadComponent: () => import('./pages/page-b/page-b'),   
    providers: [
      { provide: MAGIC_NUMBER, useValue: 100}
    ]

  },
  { path: 'page-c', loadComponent: () => import('./pages/page-c/page-c'),
    loadChildren: () => import('./pages/page-c/c-routing').then(m => m.PageCRoutes) }
];
