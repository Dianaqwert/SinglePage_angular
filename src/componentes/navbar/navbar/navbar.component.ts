import { Component} from '@angular/core';
import { RouterModule,Router} from '@angular/router';
import { BarraBuscComponent } from '../../barra-busc/barra-busc.component';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule,BarraBuscComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:true,
})
export class NavbarComponent {
  text1:string="Rincon";
  text2:string="Sabio";
  textEv:string="Evento";
  textLib:string="Librería";
  textFav:string="Favoritos";
  img1:string="im1.jpg";
  img2:string="im2.jpg";
  img3:string="im3.jpg";

  //para la navegación en rutas
  constructor(private router: Router) {}
  
  //true si no se encuentra en /formulario
  //false  si se esta en /formulario , no se muestra la barra
  get mostrar() {
    // ocultar sólo en /formulario
    return this.router.url !== '/formulario';
  }
}
