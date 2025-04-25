import { Routes } from '@angular/router';
import { LibreriaComponent } from '../componentes/libreria/libreria/libreria.component';
import { BuscarComponent } from '../componentes/busqueda/buscar/buscar.component';
import { FormularioComponent } from '../componentes/formulario/formulario.component';

export const routes: Routes = [
    //barra Navegación
    {path:'libreria',component:LibreriaComponent},
    {path:'formulario',component:FormularioComponent},
    //busqueda por nombre
    { path: 'buscar/:nombre', component:BuscarComponent },
    //default
    {path:'**',pathMatch:'full',redirectTo:'libreria'},

];
