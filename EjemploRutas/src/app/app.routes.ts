import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';
import { Contacto } from './pages/contacto/contacto';
import { ServiciosProfesionales } from './pages/servicios-profesionales/servicios-profesionales';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: Home },
    { path: 'contacto', component: Contacto },
    { path: 'servicios', component: ServiciosProfesionales },

    //Siempre lo ultimo del array
    // { path: '**', redirectTo: 'home' }
    { path: '**', component: Page404 }


];
