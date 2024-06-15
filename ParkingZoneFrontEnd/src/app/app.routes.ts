import { Routes } from '@angular/router';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { TestacionamientoComponent } from './components/testacionamiento/testacionamiento.component';
import path from 'path';
import { Component } from '@angular/core';
import { CreaeditamembresiaComponent } from './components/membresia/creaeditamembresia/creaeditamembresia.component';
import { CreaeditatestacionamientoComponent } from './components/testacionamiento/creaeditatestacionamiento/creaeditatestacionamiento.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { segGuard } from './guard/seguridad.guard';
import { EstacionamientoComponent } from './components/estacionamiento/estacionamiento.component';
import { CreaeditaestacionamientoComponent } from './components/estacionamiento/creaeditaestacionamiento/creaeditaestacionamiento.component';
import { TpagoComponent } from './components/tpago/tpago.component';
import { CreaeditatpagoComponent } from './components/tpago/creaeditatpago/creaeditatpago.component';
import { PagoComponent } from './components/pago/pago.component';
import { CreaeditapagoComponent } from './components/pago/creaeditapago/creaeditapago.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'membresias',
        component: MembresiaComponent,
        children: [
            {
                path:'nuevo',component:CreaeditamembresiaComponent
            },
            {
              path:'edicionesm/:id',component:CreaeditamembresiaComponent
            }
        ],
        canActivate:[segGuard]// solo construcciones, se debe agregar a cada uno
    },
    {
        path: 'testacionamientos',
        component: TestacionamientoComponent,
        children: [
            {
                path:'nuevo',component:CreaeditatestacionamientoComponent
            },
            {
              path:'edicioneste/:id',component:CreaeditatestacionamientoComponent
            }
        ],
        canActivate:[segGuard]// solo construcciones, se debe agregar a cada uno
    },
    {
        path: 'estacionamientos',
        component: EstacionamientoComponent,
        children: [
            {
                path:'nuevo',component:CreaeditaestacionamientoComponent
            },
            {
              path:'ediciones/:id',component:CreaeditaestacionamientoComponent
            }
        ],
        canActivate:[segGuard]// solo construcciones, se debe agregar a cada uno
    },
    {
        path: 'homes',
        component: HomeComponent,    
        canActivate:[segGuard]// solo construcciones, se debe agregar a cada uno 
    
    },
    {
        path:'tpago',
        component: TpagoComponent,
        children: [
            {
              path: 'nuevo',
              component: CreaeditatpagoComponent,
            },
            {
              path: 'ediciones/:id',
              component: CreaeditatpagoComponent,
            },
          ],
    },
    {
        path: 'pago',
        component: PagoComponent,
        children: [
            {
              path: 'nuevo',
              component: CreaeditapagoComponent,
            },
            {
              path: 'ediciones/:id',
              component: CreaeditapagoComponent,
            },
          ],
    }
    
];