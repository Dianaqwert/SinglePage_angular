import { Component } from '@angular/core';
import { LibroService } from '../../../app/servicios/libro.service';
import { Libro } from '../../../app/libros';

@Component({
  selector: 'app-libreria',
  imports: [],
  standalone:true,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {

  misLibros:Libro[]=[];

  constructor(public miservicio:LibroService){
    console.log("constructor de libros !!!");
  }

  //metodos del componente
  ngOnInit():void{
    console.log("ngOnInit de Libros!!!");
    this.misLibros=this.miservicio.getLibros();
    console.log(this.misLibros);
  }


}
