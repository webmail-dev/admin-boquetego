import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
// import { guestGuard } from './guards/guest.guar';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
    // canActivate: [guestGuard],
    title: 'Login'
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    canActivate: [authGuard],
    title: 'Inicio',
    data: {
      description: 'Panel principal',
      canonical: '/'
    }
  },

  {
    path: 'nuevoDestino',
    loadComponent: () =>
      import('./pages/nuevo-destino/nuevo-destino').then(m => m.NuevoDestino),
    canActivate: [authGuard],
    title: 'Nuevo Destino'
  },

  {
    path: 'destinos',
    loadComponent: () =>
      import('./pages/destinos/destinos').then(m => m.Destinos),
    canActivate: [authGuard],
    title: 'Destinos'
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];