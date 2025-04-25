import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-barra-busc',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './barra-busc.component.html',
  styleUrl: './barra-busc.component.css'
})
export class BarraBuscComponent {
  
  constructor(private router:Router){};

  //redirige al usuario a la ruta /buscar/nombre, donde nombre es lo que el usuario escribió.
  buscarLibro(nombre: string) {
    // cada vez que cambias 'nombre' navegas a /buscar/nombre
    this.router.navigate(['/buscar', nombre]);
  }

}
