import { Route } from '@angular/router';

// lazy-load standalone component
export const APP_ROUTES: Route[] = [
  {
    path: 'pokemon',
    loadComponent: () =>
      import('./heroes/heroes.component').then((mod) => mod.HeroesComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },
];
