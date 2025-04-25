import { Component } from '@angular/core';
import { RouterModule, RouterOutlet,Router } from '@angular/router';
import { NavbarComponent } from "../componentes/navbar/navbar/navbar.component";
import { LibreriaComponent } from '../componentes/libreria/libreria/libreria.component';
import { BuscarComponent } from "../componentes/busqueda/buscar/buscar.component";
import { FooterComponent } from "../componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, LibreriaComponent, BuscarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ps25_libreriaRutasServiciosInputOutputComponentes';

}
