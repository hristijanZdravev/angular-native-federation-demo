import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const APP_ROUTES: Routes = [
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'info', loadComponent: () => import('./info.component').then(m => m.InfoComponent) },
      { path: 'example', loadComponent: () => import('./example.component').then(m => m.ExampleComponent) },
    ]
  }
];
